/// <reference types="cypress"/

it('Ipo _Jainam', () => {
    cy.visit('https://ipo.jainam.in/#/startup')
    cy.wait(3000)
    cy.get(':nth-child(3) > .ng-star-inserted > .btn').click()
    //Enter the userid
    cy.wait(500)
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('Dk2203434')
    //click on continue button
    cy.wait(500)
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    // enter password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Mahesh@237')
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
    // enter the pin 
    cy.get('#pin1').type(6)
    cy.get('#pin2').type(2)
    cy.get('#pin3').type(7)
    cy.get('#pin4').type(0)
    cy.wait(5000)
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.wait(2000)
    cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[1]').click({force:true})
    
    // Verify that the page or URL is updated
    cy.wait(4000)
    cy.url().should('include', 'https://ipo.jainam.in/home');
    Cypress.on('uncaught:exception', (err) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });
    // Click on Ipo 
    //cy.get('.invest_box_wrapper > :nth-child(1)').click()
    // cy.xpath('/html/body/app-root/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[1]')
    // .should('exist')
    // .invoke('removeAttr', 'target')  // Remove the target attribute
    // .wait(500)  // Allow time for JavaScript to settle
    // .click();  // Click the link
  //cy.xpath('/html/body/app-root/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[1]').invoke("removeAttr", "target").click({timeout:3000},{force:true});
   //cy.visit('https://uatipo.jainam.in/RedirectToIpo/jplus?C00pt84Lr1xV4FEHBfb%2FuZXbVj2wMvjVR%205e%20GXGVwVfc4xLjYZZwcsLo8oxylRQ8Z1hN71Rfxj1H26Gkz6cfA=%3D')

 // Step 2: Click on the button that opens the Google Play Store page
    // Assuming it's a link, you can target it using an appropriate selector
    // cy.get('[href="https://apps.apple.com/my/app/jainam-space/id1536402914"]')
    // .invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    // .click({timeout:3000}); // Click the button/link

  // Step 3: Wait for 2 seconds
//  cy.wait(5000);

  // Step 4: After 2 seconds, navigate back to the original page
  //cy.visit('https://ipo.jainam.in');
  // Go back to the original page
  
  cy.get(
    '[href="https://play.google.com/store/apps/details?id=com.jainam.space&hl=en_IN&gl=US"]'
  )

    .invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000},{force:true}); // Click the button/link

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
  cy.wait(1000)
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
                 //   cy.get('.bd-example-modal-md > .modal-dialog > .modal-content > .modal-footer > .btn').click()
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
  
            // logout flow
            //click on profile icon 
            cy.get('.dropdown > [_ngcontent-ng-c1585925410=""] > #navbarDropdown').click()
            //click on logout option
            cy.xpath('/html/body/app-root/app-layout/app-headerpenal/header/div/nav/ul/li[3]/div/div/div/div[2]/ul/li[5]/a').click()
            cy.wait(1000)


        
                    
      })


