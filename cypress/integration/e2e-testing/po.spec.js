import HomePage from '../../page-objects/HomePage'

describe('HomePage test', () => {
    it('Homepage layout', () => {
        const homePage = new HomePage()
        homePage.visit()
        homePage.pause(3000)
        homePage.carouselIsVisible() 
    })
})