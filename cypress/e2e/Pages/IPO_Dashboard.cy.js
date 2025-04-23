describe("IPO_Dashboard", () => {
    it("IPO_Dashboard", () => {
      // Step 1: Visit the main IPO page
      cy.visit('https://ipo.jainam.in/#/startup')
      cy.wait(3000)
      cy.get('.banner-text > :nth-child(3) > .button > .btn').click()
      //Enter the userid
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('Dk2203434')
      //click on continue button
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
      // enter password
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Mahesh@237')
      //click on continue button
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
      // enter the pin 
      cy.get('#pin1').type(6)
      cy.get('#pin2').type(2)
      cy.get('#pin3').type(7)
      cy.get('#pin4').type(0)
      cy.wait(5000)
      // cy.window().then((win) => {
      //   cy.stub(win, 'open').callsFake((url) => {
      //     win.location.href = url;
      //   });
      // });
      // cy.wait(2000)
      // cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[1]').click({force:true})
      // // Verify that the page or URL is updated
      // cy.wait(4000)
      // cy.url().should('include', 'https://ipo.jainam.in/home');
      // Cypress.on('uncaught:exception', (err) => {
      //   // returning false here prevents Cypress from
      //   // failing the test
      //   console.log('Cypress detected uncaught exception: ', err);
      //   return false;
      // });
         
      // // Step 2: Click on the button that opens the Google Play Store page
      // // Assuming it's a link, you can target it using an appropriate selector
      // cy.get('[href="https://apps.apple.com/my/app/jainam-space/id1536402914"]')
      //   .invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
      //   .click(); // Click the button/link
  
      // // Step 3: Wait for 2 seconds
      // cy.wait(5000);
  
      // // Step 4: After 2 seconds, navigate back to the original page
      // //cy.go("back"); 
      // cy.visit("https://ipo.jainam.in/home");// Go back to the original page
  
      // cy.get(
      //   '[href="https://play.google.com/store/apps/details?id=com.jainam.space&hl=en_IN&gl=US"]'
      // )
  
      //   .invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
      //   .click(); // Click the button/link
  
      // Cypress.on("uncaught:exception", (err) => {
      //   // returning false here prevents Cypress from
      //   // failing the test
      //   console.log("Cypress detected uncaught exception: ", err);
      //   return false;
      // });
  
      // // Step 3: Wait for 2 seconds
      // cy.wait(2000);
  
      // // Step 4: After 2 seconds, navigate back to the original page
      // //cy.go("back"); // Go back to the original page
      // cy.visit("https://ipo.jainam.in/home");
  
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
    
     cy.get('.bid-history > .container').should('have.length.above',0)
     {
         cy.log('data found')
     }
  
     cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-ipolist/section[1]/div/div[3]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[2]/div/span')
     .invoke('text')  // Extract the text from the element
     .then((text) => {
       cy.log(text);
       switch(text){
        case '':  // it checks if ipo is normal then perfom bid operation
          cy.log('Normal Ipo was there you can bid it ')
  
          //Bid button is visible or not assertion
             //Bid button is visible or not assertion
       cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="5"] > .bid-btn').should('be.visible')
       cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="5"] > .bid-btn').click()
  
       //verify bid information is vesible
       cy.get('.bid').should('be.visible')
  
       //check client code field is visible
     // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-bid/app-nse/section/div/div/div[1]/div[2]/form/div/div[2]/div/div[2]/div/label').should('be.visible')
      //type client code
      cy.wait(1000)
     // cy.get(':nth-child(2) > .d-flex > .col-8 > .form-control').type('J33{enter}', {force: true})
      //Check + sign is visible or not
     // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-bid/app-nse/section/div/div/div[1]/div[2]/form/div/div[2]/div/div[5]/div/div[1]/div/div/div[3]/a/span').should('be.visible')
      //click on + sign
     // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-bid/app-nse/section/div/div/div[1]/div[2]/form/div/div[2]/div/div[5]/div/div[1]/div/div/div[3]/a/span').click()
     
     //click on ok button on new dailogue message
    // cy.get('.bd-example-modal-md > .modal-dialog > .modal-content > .modal-footer > .btn').click()
  
     // click on lot size 
     cy.wait(1000)
      cy.get(':nth-child(3) > .lot_btn > span').click().click()
      //Amount payable should be visible
      cy.get('.bid-amount-compont > h3').should('be.visible')
      
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
        //Verify subbmit button is visible and click on sumbmit button without accepting terms and condition
        cy.get('#load2').should('be.visible')
        cy.get('#load2').click()
         // Check if the bid element exists using XPath
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]')
      .then(($element) => {
        if ($element.length > 0) {
          // If the element is found, bid has already been placed
          cy.log('Already bid was present');
        } else {
          // If the element is not found, bid is not placed
          cy.log('You can bid it');
        }
      });
  
        //Verify trigger message
         
        //cy.get('.ng-trigger').should('be.visible')
  
     })
    })
  }) 
              
              break;
              case '( SME )':
                cy.log('Ipo was SME NOT TO BID IT')
                break;
                default:
                  cy.log('there was no ipo today to bid it')
  
      }
  
       // Log the trimmed text
     });
   
  
  //check for SME IPO
  //  cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-ipolist/section[1]/div/div[3]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[2]/div/span')
  //  .invoke('text')
  //  cy.log('text')
  //  .then((text)=>{
  //           switch(text)
  //           {
  //           case '': //IF TEXT IS EMPTY
  //             cy.log('Normal Ipo was there you can bid it ')
  
  //             //Bid button is visible or not assertion
  //             cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="5"] > .bid-btn').should('be.visible')
  //             cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="5"] > .bid-btn').click()
           
  //             //verify bid information is vesible
  //             cy.get('.bid').should('be.visible')
           
  //             //check client code field is visible
  //           // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-bid/app-nse/section/div/div/div[1]/div[2]/form/div/div[2]/div/div[2]/div/label').should('be.visible')
  //            //type client code
  //            cy.wait(1000)
  //           // cy.get(':nth-child(2) > .d-flex > .col-8 > .form-control').type('J33{enter}', {force: true})
  //            //Check + sign is visible or not
  //           // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-bid/app-nse/section/div/div/div[1]/div[2]/form/div/div[2]/div/div[5]/div/div[1]/div/div/div[3]/a/span').should('be.visible')
  //            //click on + sign
  //           // cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-bid/app-nse/section/div/div/div[1]/div[2]/form/div/div[2]/div/div[5]/div/div[1]/div/div/div[3]/a/span').click()
            
  //           //click on ok button on new dailogue message
  //           cy.get('.bd-example-modal-md > .modal-dialog > .modal-content > .modal-footer > .btn').click()
           
  //           // click on lot size 
  //           cy.wait(1000)
  //            cy.get(':nth-child(3) > .lot_btn > span').click().click()
  //            //Amount payable should be visible
  //            cy.get('.bid-amount-compont > h3').should('be.visible')
             
  //            //GET VALUES FROM LOT SIZE
            
  //            cy.get('.col-7 > .d-flex > .col-8 > .w-100').invoke('val').then( (lotsize)=>{
  //               cy.log('Lot Size'+ lotsize)
  //               const lotSizeValue = parseFloat(lotsize); // Convert to number
           
  //          cy.get('.mt-md-0 > .d-flex > .p-0 > .w-100').invoke('val').then((price)=>{
  //              cy.log('Price: ' + price)
  //              const priceValue = parseFloat(price); // Convert to number
           
           
  //          cy.get('.col-lg-2.p-0 > .d-flex > .p-0 > .w-100').invoke('val').then((cutofprice)=>{
  //              cy.log('cut of price: ' + cutofprice)
  //              const cutoffPriceValue = parseFloat(cutofprice); // Convert to number
                    
  //              const total = priceValue * cutoffPriceValue;
  //              cy.log('Total: ' + total);
  //              //cy.scrollTo('top')
  //              cy.wait(1000)
  //              cy.scrollTo('center')
  //               // click on accept terms and conditions 
  //               cy.get('.checkbox-option.mt-4 > .squaredFour > label').click()
  //              //Verify subbmit button is visible and click on sumbmit button without accepting terms and condition
  //              cy.get('#load2').should('be.visible')
  //              cy.get('#load2').click();
  //             })
  //           })
  //         })
               
  //         break;
  //         case 'SME':
  //               cy.log('Normal Ipo was there you can bid it ');
  //               break;
  //               default:
  //                 cy.log('today there is no IPO was there');
  
  //           }
  
  //  })
  //if(cy.xpath('/html/body/app-root/app-layout/app-maincontent/app-ipolist/section[1]/div/div[3]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td[2]/div/span').should('exist'))
  
      // logout flow
              //click on profile icon 
              cy.wait(500)
              cy.get('.dropdown > [_ngcontent-ng-c1585925410=""] > #navbarDropdown').click({force:true})
              //click on logout option
              cy.xpath('/html/body/app-root/app-layout/app-headerpenal/header/div/nav/ul/li[3]/div/div/div/div[2]/ul/li[5]/a').click()
              cy.wait(1000)
  
    })
   
  }) 
  
  
  
