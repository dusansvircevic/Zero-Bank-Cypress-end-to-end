const pages = ['http://example.com/'] 
const sizes = ['iphone-6', 'ipad-2', [1200,800]] 

describe('Visual Regression', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resoulution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
         })
    })
})

describe('Single elemnt snapshot', () => {
    it('Should match single eelement on the page', () => {
        cy.visit('http://example.com/')
        cy.get('h1').matchImageSnapshot()
    })
})
