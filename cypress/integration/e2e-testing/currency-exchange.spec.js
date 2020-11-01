describe('Currency exchange test', () => {
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

    it('Fill conversion form', () => {
        cy
            .get('#pay_bills_tab').click()
            .get('a').contains('Purchase Foreign Currency').click()
            .get('#pc_currency').select('EUR')
            .get('#pc_amount').type('1500')
            .get('#pc_inDollars_true').click()
            .get('#pc_calculate_costs').click()
    })

    it('Display conversion amount', () => {
        cy.get('#pc_conversion_amount')
            .should('contain', '1082.09 euro (EUR) = 1500.00 U.S. dollar (USD)')
    })

})