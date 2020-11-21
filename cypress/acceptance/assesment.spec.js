beforeEach(() => {
    cy.visit('https://10clouds.com/')
    cy.get('#gatsby-focus-wrapper > div.navigation__NavWrapper-pj6g6j-1.jchvh > nav > div > a:nth-child(5)').click()
  })

describe('Assesment', () => {
    it('User should see only one "QA Automation Engineer" position in open positions on Career tab', () => {
        var match = 0;
        cy
        .get('#job-offers-section div.job-offers__wrapper a span div h2[class="job-offer__title"]')
        .each(($jobOfferTitle) => {
            if ($jobOfferTitle.text() === 'QA Automation Engineer') {
                match += 1;
                console.log($jobOfferTitle.text())
            }
        })
        .then(() => {
            expect(match).to.equal(1)
        })
    })

    it('After typing "Automation" in search job input, the user should see that each result contains "Automation" in title', () => {
        cy
        .get('#search-job')
        .type('Automation')
        .then(($search) => {
            cy
            .get('#job-offers-section div.job-offers__wrapper a span div h2[class="job-offer__title"]')
            .each(($jobOfferTitle) => {
                cy
                .get($jobOfferTitle)
                .contains('Automation')
            })
        })
    })
})
