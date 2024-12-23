/// <reference types="cypress"/> 
//import { Login_Page } from "./Login_Page.cy"
//const lp=new Login_Page()
describe('IPO Home Page ',function(){


 it('IPO Home Page', () => {
     cy.visit('https://ipo.jainam.in');
 
     // Wait for the page to load (adjust timeout as needed)
     cy.wait(3000);
 
     cy.window().then((win) => {
         const startTime = performance.now(); // Capture start time
 
         // Wait for the page to load (adjust timeout as needed)
         cy.wait(1000);
 
         const endTime = performance.now(); // Capture end time
         const loadTime = endTime - startTime; // Calculate load time
 
         console.log(`Home page load time: ${loadTime} seconds`);
 
         // Optionally, log a warning if load time exceeds a threshold
         if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
             console.warn(`Home page load time exceeded threshold! (${loadTime}ms)`);
         }

        })
      })


    it.only('IPO Home Page ',function(){
      cy.wait(500)
      cy.visit("https://ipo.jainam.in/home")
      cy.wait(3000)
    
      // Click on Apply for an IPO
      cy.get(':nth-child(3) > .ng-star-inserted > .btn').click({timeout:3000})
    
      // Enter Username 
      cy.get('.userid_wrap > .input_wrap > .text_form').type('DK2203434')
      //cy.wait(2000)
    
      // Enter Password
      cy.get('#LoginPassword').type('Mahesh@237')
     // cy.wait(4000)
    
      //Click on Login Button 
      cy.get('.login_button_wrap').click()
      cy.wait(3000)
    
      // Enter OTP 
      cy.get('[formcontrolname="otp1"]').type('6')
      cy.get('[formcontrolname="otp2"]').type('2')
      cy.get('[formcontrolname="otp3"]').type('7')
      cy.get('[formcontrolname="otp4"]').type('0')
       
      //Check image is visible 
     cy.wait(4000)
     cy.get('.banner-img > img').should('be.visible')
    
  
  // Step 2: Click on the button that opens the Google Play Store page
    // Assuming it's a link, you can target it using an appropriate selector
    cy.get('[href="https://apps.apple.com/my/app/jainam-space/id1536402914"]')
    .invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000}); // Click the button/link

  // Step 3: Wait for 2 seconds
  cy.wait(3000);

  // Step 4: After 2 seconds, navigate back to the original page
  cy.visit('https://ipo.jainam.in');
  // Go back to the original page
  cy.wait(2000)
  cy.get(
    '[href="https://play.google.com/store/apps/details?id=com.jainam.space&hl=en_IN&gl=US"]'
  )

    .invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:2000},{force:true}); // Click the button/link

  Cypress.on("uncaught:exception", (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log("Cypress detected uncaught exception: ", err);
    return false;
  });

  // Step 3: Wait for 2 seconds
  cy.wait(2000);

  // Step 4: After 2 seconds, navigate back to the original page
  cy.visit('https://ipo.jainam.in');
  // Go back to the original page
    
  //  IPO Share through Facebook & What’s up  
  cy.get('.initial-public-share').should('be.visible')
  cy.get('.initial-public-share').click()
   
  //Click on facebook Logo
    
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });
  cy.wait(1000)
  cy.get('.initial-social-icons > :nth-child(1) > .fa').click();
  
  // Verify that the page or URL is updated
  cy.wait(8000)
 // cy.url().should('include', 'http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fipo.jainam.in%2Fhome');
  // cy.get('.initial-social-icons > :nth-child(1) > .fa').should('be.visible')
  // cy.get('.initial-social-icons > :nth-child(1) > .fa').invoke('removeAttr', 'target').click({timeout:5000})
  // cy.wait(1000)
  
  //Back to previous page 
  cy.visit('https://ipo.jainam.in');
  cy.wait(2000)
  cy.scrollTo(500,500) 
   
  //Click on IPO Share through Facebook & What’s up  
  cy.wait(500)
  cy.get('.init-show').click({force:true})

  //Click on whatsapp Logo
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });
  cy.wait(1000)
  // cy.get(':nth-child(2) > .fa').should('be.visible')
   cy.get(':nth-child(2) > .fa') // Select the element
  // .invoke('attr', 'target', null) // Set target to null
   .click({force:true}); // Click the link afterwards

  
  
 // cy.get(':nth-child(2) > .fa').click({timeout:5000})
  cy.wait(1000)
   
  //Back to previous page 
  cy.visit('https://ipo.jainam.in');
   cy.wait(1000) 
  
   // // Close the facebook and Whats app 
  //  cy.get('.init-close').should('be.visible')
  //  cy.get('.init-close').click()

  
     // Assertion for OPEN IPO 
     cy.wait(1000)
    cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-clientdashboard/section[2]/div/div/div[1]/div[2]/div[1]').should('be.visible')
     

   //First test Open IPO contains date  if data is present click on Apply button
   cy.wait(500)
     if(cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-clientdashboard/section[2]/div/div/div[1]/div[2]/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody').should('have.length.above',0))
     {
        cy.wait(3000)        
        if (cy.get('.btn-grid-bid > .btn').should('be.visible')) 
                  {
                    //Click on apply button 
                    cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="5"] > .btn-grid-bid > .btn').click({force:true},{timeout:5000},{multiple:true})
                    cy.wait(1000)
                    //click on ok button for new dailog box
                  //  cy.get('.bd-example-modal-md > .modal-dialog > .modal-content > .modal-footer > .btn').click()
                    cy.wait(1000)
                    cy.visit('https://ipo.jainam.in');
            }
      }
    
     //Check if Open IPO contains data 
    
     //table[class="k-grid-table k-table k-table-md"]>tbody>tr
     cy.wait(3000)

    if(cy.get('table[class="k-grid-table k-table k-table-md"] >tbody> tr:nth-child(2)').should('have.length.above',0))
      {
           cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-clientdashboard/section[2]/div/div/div[1]/div[1]/div').click({force:true})
         //  cy.get('.initial-social-icons > :nth-child(1) > .fa').should('be.visible')
         //  cy.wait(2000)
         //  cy.get(':nth-child(2) > .fa').should('be.visible')
          // cy.wait(1000)
           cy.get('.init-close').click({force:true})
      }

       // Scrolling
     //cy.wait(2000)
     cy.scrollTo(0,1000)
  
          
      //Assertion for  Upcoming IPO
      //cy.wait(4000)
      cy.xpath('//*[@id="accordion"]/div[1]/div/h2').should('be.visible')

     //Check if Upcoming IPO contains data 
      if(cy.get('#collapseOne').should('have.length.above',0))
        {
          cy.get('[href="#collapseTwo"]').click({force:true})
        }
      
         // Check SEBI contains data
         if(cy.get('#collapseTwo > .k-grid').should('have.length.above',0))
          {
                     cy.log("SEBI grid Contains data ")
         }  
        // cy.wait(3000) 
         cy.scrollTo('center')          
        
        //  //Test on 2nd page ,data is present   ----ON SEBI GRID 
        // cy.get('#collapseTwo > .k-grid > .k-pager > .k-pager-numbers-wrap > .k-pager-numbers > [aria-label="Page 2"]').click()
        // cy.wait(2000)
        // if(cy.get('#collapseTwo > .k-grid').should('have.length.above',0))
        // {
        //   cy.log('Second page contains data ')
          
        // }
        
        // //Test on 4TH page ,data is present   ----ON SEBI GRID 
        // cy.scrollTo('center')
        // cy.get('#collapseTwo > .k-grid > .k-pager > .k-pager-numbers-wrap > .k-pager-numbers > [aria-label="Page 4"]').click()
        // //cy.wait(2000)
        // if(cy.get('#collapseTwo > .k-grid').should('have.length.above',0))
        // {
        //   cy.log('Fourth page contains data ')

        // }

        // Assertion for Close IPO
        //cy.wait(3000)
        cy.get('.custom_close_gridtable > .ipo-left-grid').should('have.length.greaterThan',0)
        // click on 3rd page 
        //cy.wait(2000)
        cy.get('.custom_close_gridtable > .ipo-left-grid > .k-grid > .k-pager > .k-pager-numbers-wrap > .k-pager-numbers > [aria-label="Page 3"]').click({force:true})
        //Click on 5th Page 
        //cy.wait(1000)
        cy.get('.custom_close_gridtable > .ipo-left-grid > .k-grid > .k-pager > .k-pager-numbers-wrap > .k-pager-numbers > [aria-label="Page 5"]').click({force:true})
        cy.get('.footer-logo > img').should('be.visible')
        cy.get('#return-to-top').click()
        //Click on Apply for ipo
  

        
                    
      })
})
