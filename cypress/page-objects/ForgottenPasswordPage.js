import BasePage from './BasePage'

class ForgottenPasswordPage extends BasePage {

    shouldExist(){
        cy.get('#send_password_form').should('be.visible')
        cy.url().should('include', 'forgot-password.html')
    }

    fillEmail(){
        cy.get('#user_email').type('test.email@email.com')
    }

    submitEmail(){
        cy.get('[type=submit]').contains('Send Password').click()
    }

    showSuccessMessaage(){
        cy.url().should('include', 'forgotten-password-send.html')
    }
}

export default ForgottenPasswordPage
