import BasePage from './BasePage'

class LoginPage extends BasePage {

    clickForgotPasswordLink(){
        cy.get('a').contains('Forgot your password ?').click()
    }

    showErrorMessage(){
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    }
}

export default LoginPage
