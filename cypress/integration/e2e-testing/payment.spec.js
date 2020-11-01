describe('Payment', () => {

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

    it('Should send new payment (fake)', () => {
        cy
            .get('#pay_bills_tab').click()
            .get('a').contains('Pay Saved Payee').click()
            .get('#sp_payee').select('wellsfargo')
            .get('#sp_account').select('Loan')
            .get('#sp_amount').type('2000')
            .get('#sp_date').type('2020-10-10 {enter}')
            .get('#sp_description').type('Payment description')
            .get('#pay_saved_payees').click()
    })

    it('Should show success message', () => {
        cy
            .get('#alert_content')
                .should('be.visible')
                .and('contain', 'The payment was successfully submitted' )
    })
})