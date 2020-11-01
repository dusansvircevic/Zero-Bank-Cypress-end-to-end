import HomePage from '../../page-objects/HomePage'
import SearchResultPage from '../../page-objects/SearchResultsPage'
import TopNavbar from '../../page-objects/components/TopNavbar'

describe('Searchbox test', () => {
    const homePage = new HomePage()
    const searchResultPage = new SearchResultPage()
    const topNavbar = new TopNavbar()

    before(() => {
        homePage.visit()
    })

    it('should type into seacrhbox and submit with pressing enter', () => {
        topNavbar.search('bank')
    })

    it('should show search results page', () => {
        searchResultPage.displayTitle()
    })

    it('should display homepage again', () => {
        searchResultPage.goBack()
    })

})