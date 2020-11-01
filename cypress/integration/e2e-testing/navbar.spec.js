describe('Navbar Test', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
    })

    it('should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include','feedback.html')
    })

    it('should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    })

})