class CareersPage
{

    constructor(openPositionsListLocator, searchJobsInputLocator) {
        this.openPositionsListLocator = '#job-offers-section div.job-offers__wrapper a span div h2[class="job-offer__title"]';
        this.searchJobsInputLocator = '#search-job';
    }

    getListOfOpenPositionsTitles(){
       return cy.get(this.openPositionsListLocator) 
    }

    getSearchJobInput(){
        return cy.get(this.searchJobsInputLocator)
    }
    
}
export default CareersPage
