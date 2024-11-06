/// <reference types="cypress"/> 
import { Login_Page } from "./Login_Page.cy"
const lp1=new Login_Page()
describe('tab nevigation ',function(){
it('checks Tab Nevigation ', () => 
    {
      cy.visit("https://ipo.jainam.in/home");
      cy.wait(5000);
      cy.viewport(1280, 720);
  
      cy.get(":nth-child(3) > .ng-star-inserted > .btn").click();
      //   // //cy.get('.close > span').click()
      cy.wait(1000);
  
      // Enter Username
      cy.get(".userid_wrap > .input_wrap > .text_form").type("DK2203434");
      //cy.wait(2000)
  
      // Enter Password
      cy.get("#LoginPassword").type("Mahesh@237");
      // cy.wait(4000)
  
      //Click on Login Button
      cy.get(".login_button_wrap").click();
      cy.wait(3000);
  
      // Enter OTP
      cy.get('[formcontrolname="otp1"]').type("6");
      cy.get('[formcontrolname="otp2"]').type("2");
      cy.get('[formcontrolname="otp3"]').type("7");
      cy.get('[formcontrolname="otp4"]').type("0");

      cy.wait(2000)
      cy.get('.banner-text > :nth-child(3) > .button > .btn').click()
      cy.wait(2000)
      cy.scrollTo(500,0)
      
      // Assertion for Ipo Window Heading
      cy.wait(3000)
      cy.get('.heading-text > h4').should('be.visible')
      
     
     
      // check ipo window contains data 
      if(cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-ipolist/section[1]/div/div[3]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
     {
             cy.log('Data found')
     }
      
     //Assertion for Bid All history 
     cy.get('.col-md-6').should('be.visible')
     //Click on all dropdown
     //cy.get('.d-flex.col-md-5 > .form-control').click()
    // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-ipolist/section[2]/div/div[1]/div/div/div[1]/select').select('ALL')
      cy.wait(1000)
     cy.get('.bid-history > .container').should('have.length.above',0)
     {
         cy.log('data found')
     }
    

     cy.placeBid('Target Company Name');
     //click on ok button on new dailogue message
   cy.get('.bd-example-modal-md > .modal-dialog > .modal-content > .modal-footer > .btn').click()

   // click on lot size 
   cy.wait(1000)
    cy.get(':nth-child(3) > .lot_btn > span').click()
    //Amount payable should be visible
    cy.get('.bid-amount-compont > h3').should('be.visible')
    //enter UPI ID 
    cy .wait(500)
    cy.get('.col-lg-6 > .form-control').clear().type('Test@123')
    
    //GET VALUES FROM LOT SIZE
   
    cy.get('.col-7 > .d-flex > .col-8 > .w-100').invoke('val').then( (lotsize)=>{
       cy.log('Lot Size'+ lotsize)
       const lotSizeValue = parseFloat(lotsize); // Convert to number
  
  cy.get('.mt-md-0 > .d-flex > .p-0 > .w-100').invoke('val').then((price)=>{
      cy.log('Price: ' + price)
      const priceValue = parseFloat(price); // Convert to number

  
  cy.get('.col-lg-2.p-0 > .d-flex > .p-0 > .w-100').invoke('val').then((cutofprice)=>{
      cy.log('cut of price: ' + cutofprice)
      const cutoffPriceValue = parseFloat(cutofprice); // Convert to number
           
      const total = priceValue * cutoffPriceValue;
      cy.log('Total: ' + total);
     //cy.scrollTo('top')
      cy.wait(1000)
      cy.scrollTo('center')
       // click on accept terms and conditions 
       cy.get('.checkbox-option.mt-4 > .squaredFour > label').click()
      // cy.scrollTo('top')
      //Verify subbmit button is visible and click on sumbmit button without accepting terms and condition
     cy.get('#load2').should('be.visible')
     cy.get('#load2').click()
      //cy.wait(2000)

      //Verify trigger message
       
      //cy.get('.ng-trigger').should('be.visible')

   })
  })
}) 
  
    })
  })
        
          
      
    
     
   

