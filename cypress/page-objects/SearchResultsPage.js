import BasePage from './BasePage'

class SearchResultPage extends BasePage {

    displayTitle(){
        cy.get('h2').as('title')
        cy.get('@title').contains('Search Results:').should('be.visible')
    }

}

export default SearchResultPage
