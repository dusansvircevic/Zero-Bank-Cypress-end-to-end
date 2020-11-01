class Tabs {
    shouldBeVisible(text){
        cy.get('ul.nav-tabs').should('be.visible')
    }

}

export default Tabs