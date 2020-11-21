class BasePage {

    constructor(basePageLocator, careersTabLocator) {
        this.basePageLocator = 'https://10clouds.com/';
        this.careersTabLocator = '#gatsby-focus-wrapper > div.navigation__NavWrapper-pj6g6j-1.jchvh > nav > div > a:nth-child(5)';
    }

    openBasePage(){
        return cy.visit(this.basePageLocator)
    }

    goToCareersTab(){
        return cy.get(this.careersTabLocator).click()
    }



}
export default BasePage