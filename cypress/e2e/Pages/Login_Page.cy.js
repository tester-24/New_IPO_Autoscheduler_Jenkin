export class Login_Page{
    GetUrl()
    {
        cy.visit('https://ipo.jainam.in')
    }
    
    enterUsername1() 
    {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.get('.userid_wrap > .input_wrap > .text_form').type('J33')
    }

    enterPassword1() 
    {
        cy.get('#LoginPassword').type('Alpha@123')
    }

    clickLogin1() 
    {

        cy.get('.login_button_wrap').click();
    }
    LoginPin1()
    {  
       
        
       cy.get('[formcontrolname="otp1"]').type('1{enter}')
       cy.get('[formcontrolname="otp2"]').type('2{enter}')
       cy.get('[formcontrolname="otp3"]').type('3{enter}')
       cy.get('[formcontrolname="otp4"]').type('4{enter}')
      // cy.get('.continue_button_wrap > p').click({force:true})
      
     
    }
}


