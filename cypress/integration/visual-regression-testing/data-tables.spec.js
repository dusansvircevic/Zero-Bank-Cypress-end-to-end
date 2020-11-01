describe('Visual Regression - data tables', () => {

    before(function() {
        cy
            .visit('http://zero.webappsecurity.com/login.html')
            .fixture('user').then(user => {
                const username = user.id
                const password = user.pwd
                cy.login(username, password)
            })
    })
           
    it('Load account activity', () => {
        cy.get('#account_activity_tab')
    })

    it('Data table snapshot', () => {
        cy.matchImageSnapshot()
    })

})