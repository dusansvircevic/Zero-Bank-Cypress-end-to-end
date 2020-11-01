import HomePage from '../../page-objects/HomePage'
import FeedbackPage from '../../page-objects/FeedbackPage'
import { name, email, subject, comment} from '../../fixtures/feedback-data'

describe('Feedback Test', () => {
    const homePage = new HomePage()
    const feedbackPage = new FeedbackPage()

    before(() => {
        homePage.visit()
    })

    it('load feedback form', () => {
        homePage.clickOnFeedback()
        feedbackPage.feedbackFormIsVisible()
    })

    it('fill and submit feedback form', () => {
        feedbackPage.fillFeedbackForm(name, email, subject, comment)
        feedbackPage.submitFeedbackForm()
    })

    it('display success message', () => {
        feedbackPage.showSuccessMessage()
    })

})