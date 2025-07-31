/// <reference types="cypress"/> 
describe('IPO Bulk Printing ',function(){
    it('IPO Bulk Printing',function()
    {
      cy.visit('https://comet.jainam.in/#/startup')
cy.wait(5000);
    cy.viewport(1280, 720);

    cy.get(":nth-child(3) > .ng-star-inserted > .btn").click();
    cy.wait(3000);

  // Enter Username
  cy.xpath("//kendo-textbox[@id='user_id']//input[@type='text']").type('1126');

  cy.wait(2000)
     
  cy.xpath("//button[normalize-space()='Continue']").click();

  // Enter Password    
  cy.xpath("//input[@placeholder='Enter Password']").type("J@inam$789");
  cy.xpath("//button[normalize-space()='Continue']").click();

  //Click on Login Button
  cy.wait(3000);

  // Enter OTP
  cy.xpath("//input[@id='pin1']").type("1");
  cy.xpath("//input[@id='pin2']").type("2");
  cy.xpath("//input[@id='pin3']").type("3");
  cy.xpath("//input[@id='pin4']").type("4");
  cy.wait(5000);
      cy.xpath("//button[@aria-label='Close']").click({force:true});
     
     
      //click on comet icon 
     // cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
      // .click();
   //   cy.wait(1000)
    // cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').click()
//1126  cy.visit('https://comet.jainam.in/#/RedirectToComet/jplus?FUYCBR1okdShXktQpNY9eKcY/ygpu+/dbMGloSO8e+TizmymVWizUXTkbRih7Nlm+ums5DO110X11zEx9kqXkpRqg248NtjJFPCFvpZVD7Yv5MncQucP6/uCDLyRDiOqV5ke6c8S28oyK/u37qlYnA=="')
 
//cy.visit('https://comet.jainam.in/#/RedirectToComet/jplus?ZwBItNiHlSjGOFoQ70VAqIXFM+R+ULuAsFMUUbl3MHtZL2lLSNGhdT/YucNYlDCyWfmMrnTmBnfK8l/Bk8/a3rRXzQD/zaDVoiB9UdNsSIEPMO9Zcsgrr0H8wO0rv5vFZrmq/LwPpR9Epxv4RloinA==')        
 // click on Reports
        cy.wait(4000)
       cy.get('#PartnerDropdown').click()
        //click On bulk Printing
        cy.get('[href="#/bulkprinting"]').click()
        //Click on report dropdown
        cy.wait(2000)
       // cy.xpath('/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/button').click()
        //cy.wait(2000)
       
        // new code if ipo was there it checks dropdown lenth is gratter than 5 then it will show 
        // log  no ipo was there if dropdown value gratter than 5 then ipo was there and do the  next Process

        cy.xpath("/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/button")
        .click();  // Open the dropdown (you can use .click() or other methods to trigger the dropdown if necessary)
      
      // Step 2: Wait for the dropdown options to be visible
      cy.xpath("//kendo-popup", { timeout: 10000 })  // Wait for the popup (dropdown) to appear
        .should('be.visible')  // Ensure the dropdown is visible
        .find("ul li", { timeout: 10000 })  // Find the list items (<li>) inside the dropdown
        .should('have.length.greaterThan', 0)
        .then(($li) => {
          const itemCount = $li.length;  // Get the count of dropdown items
          cy.log('Total items in the dropdown: ' + itemCount); 
          if (itemCount > 6) 
            {
            cy.log('IPO was there');
          //  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[6]/span[1]').click()
             cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[6]/span[1]').click({force:true})
                cy.scrollTo('top')
            //type code 
            cy.xpath('/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[2]/div/input').type('j33')
            //click on submit button 
           cy.xpath('/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[3]/button').click({timeout:2000})
           //click on add button
           cy.get('form.ng-dirty > .row > :nth-child(6)').click()
           cy.scrollTo('bottom')
           //Click on download button 
           cy.get('.container > .row > .col-lg-2 > .btn').click({timeout:3000})
           cy.get('.text-center > .mb-3').should('be.visible')
           cy.scrollTo("top")
          // Log if there are more than 6 items
         } 
         else 
         {
            cy.log('No IPO today');  // Log if there are 6 or fewer items
          } 
          
          
          // Log the number of items
     //   //cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[6]/span[1]').click()
      //   cy.scrollTo('top')
      //  //type code 
      //  cy.xpath('/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[2]/div/input').type('j33')
      //  //click on submit button 
      //  cy.xpath('/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[3]/button').click({timeout:2000})
      //  //click on add button
      //  cy.get('form.ng-dirty > .row > :nth-child(6)').click()
      //  cy.scrollTo('bottom')
      //  //Click on download button 
      //  cy.get('.container > .row > .col-lg-2 > .btn').click({timeout:3000})
      //  cy.get('.text-center > .mb-3').should('be.visible')
      //  cy.scrollTo("top")
       
        //cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').click()
   // logout flow
   cy.wait(2000)
 //  cy.get('.user > [_ngcontent-ng-c1468596661=""] > #navbarDropdown').click({force:true})
    cy.xpath("//li[@class='nav-item dropdown user ml-md-2 ng-star-inserted']//a[@id='navbarDropdown']").click({force:true})
            // click on logout
   cy.wait(2000)
  // cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
    cy.xpath("//label[normalize-space()='Log Out']").click({force:true}) 
    cy.wait(1000)


     })
   })
  })  
