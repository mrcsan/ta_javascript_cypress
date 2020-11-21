import BasePage from '../integration/pageObjects/BasePage'
import CareersPage from '../integration/pageObjects/CareersPage'
const basePage = new BasePage()
const careersPage = new CareersPage()

beforeEach(() => {
    basePage.openBasePage()
    basePage.goToCareersTab()
  })

describe('Assesment', () => {
    it('User should see only one "QA Automation Engineer" position in open positions on Career tab', () => {
        var foundOpenPositionCounter = 0;

        careersPage.getListOfOpenPositionsTitles()
        .each(($openPositionTitle) => {
            if ($openPositionTitle.text() === 'QA Automation Engineer') {
                foundOpenPositionCounter += 1;
            }
        })
        .then(() => {
            expect(foundOpenPositionCounter).to.equal(1)
        })
    })

    it('After typing "Automation" in search job input, the user should see that each result contains "Automation" in title', () => {

        careersPage.getSearchJobInput()
        .type('Automation')
        .then(() => {
            careersPage.getListOfOpenPositionsTitles()
            .each(($openPositionTitle) => {
                cy.get($openPositionTitle)
                .contains('Automation')
            })
        })
    })
})
