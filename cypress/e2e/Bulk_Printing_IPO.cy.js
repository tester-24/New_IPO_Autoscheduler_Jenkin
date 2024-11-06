/// <reference types="cypress"/> 
describe('IPO ',function(){
    it('IPO Bulk Printing',function()
    {
        cy.visit('https://comet.jainam.in/#/startup')
        cy.wait(4000)
        cy.get('.login-space-btn').click()

        //Enter UserId
        cy.wait(2000)
        cy.get('.userid_wrap > .input_wrap > .text_form').type('1516')


        //Enter password 
        cy.get('#LoginPassword').type('Jainam@123')
        // Click on lOgin Button 
        cy.get('.login_button_wrap').click()
        //enter pin
        cy.wait(1000);
        cy.get('[formcontrolname="otp1"]').type('1');
        cy.get('[formcontrolname="otp2"]').type('2');
        cy.get('[formcontrolname="otp3"]').type('3');
        cy.get('[formcontrolname="otp4"]').type('4');
        cy.wait(1000);
        //Click on partner dropdown
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



     })
   })