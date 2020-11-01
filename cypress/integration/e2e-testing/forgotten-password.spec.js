import HomePage from '../../page-objects/HomePage'
import LoginPage from '../../page-objects/LoginPage'
import ForgottenPasswordPage from '../../page-objects/ForgottenPasswordPage'
import TopNavbar from '../../page-objects/components/TopNavbar'

describe('Password test', () => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const forgottenPasswordPage = new ForgottenPasswordPage()
    const topNavbar = new TopNavbar()

    before(() => {
        homePage.visit()
    })

    it('should display login form', () => {
        topNavbar.clickOnSignInButton()
    })

    it('should click on the forgotten password', () => {
        loginPage.clickForgotPasswordLink()
        forgottenPasswordPage.shouldExist()
    })

    it('should fill email', () => {
        forgottenPasswordPage.fillEmail()
    })

    it('should submit the form', () => {
        forgottenPasswordPage.submitEmail()
        forgottenPasswordPage.showSuccessMessaage()
    })

})