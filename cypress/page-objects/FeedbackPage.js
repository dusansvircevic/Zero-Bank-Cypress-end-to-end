import BasePage from './BasePage'

class FeedbackPage extends BasePage {

    feedbackFormIsVisible(){
        cy.get('#feedback-title').contains('Feedback').should('be.visible')
        cy.get('form').should('be.visible')
     }

    fillFeedbackForm(name, email, defaultSubject, feedbackComment){
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#subject').type(defaultSubject)
        cy.get('#comment').type(feedbackComment)
    }

    submitFeedbackForm(){
        cy.get('.btn-signin').contains('Send Message').click()
    }

    showSuccessMessage(){
        cy.get('.span6').should('be.visible')
    }

}

export default FeedbackPage
