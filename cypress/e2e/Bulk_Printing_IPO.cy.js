/// <reference types="cypress"/> 
describe('IPO ',function(){
    it('IPO Bulk Printing',function()
    {
      cy.visit('https://comet.jainam.in/#/startup')
      cy.wait(1000)
      cy.get('.login-space-btn').click({force:true})
      //Login Flow
      cy.wait(2000)
    
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('1516')
      
      //click on continue button
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
      
      // enter password
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Jainam@123')
      
      //click on continue button
      cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
      
      // enter the pin 
      cy.get('#pin1').type(1)
      cy.get('#pin2').type(2)
      cy.get('#pin3').type(3)
      cy.get('#pin4').type(4)
      cy.wait(500)


         //click on comet icon 
      cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
       .click();
      //click on comet icon 
   //   cy.wait(1000)
    // cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').click()
//1126  cy.visit('https://comet.jainam.in/#/RedirectToComet/jplus?FUYCBR1okdShXktQpNY9eKcY/ygpu+/dbMGloSO8e+TizmymVWizUXTkbRih7Nlm+ums5DO110X11zEx9kqXkpRqg248NtjJFPCFvpZVD7Yv5MncQucP6/uCDLyRDiOqV5ke6c8S28oyK/u37qlYnA=="')
// cy.visit('https://comet.jainam.in/#/RedirectToComet/jplus?ZwBItNiHlSjGOFoQ70VAqIXFM+R+ULuAsFMUUbl3MHtZL2lLSNGhdT/YucNYlDCyWfmMrnTmBnfK8l/Bk8/a3rRXzQD/zaDVoiB9UdNsSIEPMO9Zcsgrr0H8wO0rv5vFZrmq/LwPpR9Epxv4RloinA==')        
 // click on Reports
        cy.wait(4000)
       cy.get('#PartnerDropdown').click()
        //click On bulk Printing
        cy.get('[href="#/bulkprinting"]').click()
        //Click on report dropdown
        cy.wait(2000)
        cy.xpath('/html/body/app-root/app-layout/div/app-bulkprinting/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/button').click()
        cy.wait(2000)
        cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[7]/span[1]').click()
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
       
        //cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').click()
   // logout flow
   cy.get('.user > [_ngcontent-ng-c1468596661=""] > #navbarDropdown').click()
   // click on logout
   cy.wait(500)
   cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click()
   cy.wait(1000)


     })
   })
