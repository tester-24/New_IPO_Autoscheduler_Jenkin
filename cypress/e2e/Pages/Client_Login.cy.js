export class Client_Login{
    GetUrl()
    {
        cy.visit('https://ipo.jainam.in/home')
    }
    
    enterUsername1() 
    {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.get('.userid_wrap > .input_wrap > .text_form').type('j33')
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
       
        
       cy.get('[formcontrolname="otp1"]').type('0{enter}')
       cy.get('[formcontrolname="otp2"]').type('0{enter}')
       cy.get('[formcontrolname="otp3"]').type('0{enter}')
       cy.get('[formcontrolname="otp4"]').type('0{enter}')
       cy.get('.continue_button_wrap > p').click({force:true})
      
     
    }
}


