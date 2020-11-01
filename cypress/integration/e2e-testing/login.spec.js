import HomePage from '../../page-objects/HomePage'
import LoginPage from '../../page-objects/LoginPage'
import TopNavbar from '../../page-objects/components/TopNavbar'
import Tabs from '../../page-objects/components/Tabs'
import { invalidUsername, invalidPassword } from '../../fixtures/config'

describe('Login / Logout Test', () => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const topNavbar = new TopNavbar()
    const tabs = new Tabs()

    before(() => {
        homePage.visit()
        topNavbar.clickOnSignInButton()
    })

    it('should try to login invalida data', () => {
        //custom command
        cy.login(invalidUsername, invalidPassword)
    })

    it('should display errror message', () => {
        loginPage.showErrorMessage()
    })

    it('should login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
        tabs.shouldBeVisible()
    })

    it('should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        homePage.carouselIsVisible()
    })

})