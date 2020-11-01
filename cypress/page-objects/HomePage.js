import BasePage from './BasePage'
import {baseUrl} from '../fixtures/config'

class HomePage extends BasePage {

    visit(){
        cy.visit(baseUrl)
        cy.url().should('include', 'index.html')
    }

    carouselIsVisible(){
        cy.get('#carousel').should('be.visible')
    }

    clickOnHome(){
        cy.get('#homeMenu').click()
    }

    clickOnOnlineBanking(){
        cy.get('#onlineBankingMenu').click()
    }

    clickOnFeedback(){
        cy.get('#feedback').click()
    }

}

export default HomePage