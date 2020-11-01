describe('Visual Regression - Login page', () => {

    before(function() {
        cy
            .visit('http://zero.webappsecurity.com/index.html')
            .get('#signin_button').click()
            .get('#user_login').type('test')
            .get('#user_password').type('test')
            .get('#user_remember_me').click()
    })

    it('Desktop Layout', () => {
        cy.setResolution([1280, 720])
        cy.matchImageSnapshot()
    })

    it('Tablet Layout', () => {
        cy.setResolution('ipad-2')
        cy.matchImageSnapshot()
    })

    it('Mobile Layout', () => {
        cy.setResolution('iphone-6')
        cy.matchImageSnapshot()
    })

})

