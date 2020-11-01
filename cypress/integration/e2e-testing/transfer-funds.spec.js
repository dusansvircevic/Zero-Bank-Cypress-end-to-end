describe('Transfer Funds Verification test', () => {
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

    it('Fill transfer funds form', () => {
        cy
            .get('#transfer_funds_tab').click()
            .get('#tf_fromAccountId').select('3')
            .get('#tf_toAccountId').select('4')
            .get('#tf_amount').type('1200')
            .get('#tf_description').type('Description text')
            .get('#btn_submit').click()
    })

    it('Verify correct data', () => {
        cy
            .get('#tf_fromAccountId')
                .should('have.value', 'Savings')
            .get('#tf_toAccountId')
                .should('have.value', 'Loan')
            .get('#tf_amount')
                .should('have.value', '1200')
            .get('#tf_description')
                .should('have.value', 'Description text')
    })

})