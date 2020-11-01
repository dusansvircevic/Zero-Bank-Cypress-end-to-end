describe('Find Transaction test', () => {
    before(() => {
        cy
            .visit('http://zero.webappsecurity.com/index.html')
            .url().should('include', 'index.html')
            .get('#signin_button').click()
            .fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    })

    it('Filter transactions', () => {
        cy
            .get('#account_activity_tab').click()
            .get('a').contains('Find Transactions').click()
            .get('#aa_fromAmount').type('200')
            .get('#aa_toAmount').type('1000')
            .get('[type="submit"]').click()
            .get('#filtered_transactions_for_account')
                .should('be.visible')
            .get('tbody>tr')
                .its('length')
                .should('be.gt', '0')

    })

    it('Display results', () => {
        cy
            .get('#filtered_transactions_for_account')
                .should('be.visible')
            .get('tbody>tr')
                .its('length')
                .should('be.gt', '0')
        })

})