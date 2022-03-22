var locators = require("../../../cypress/fixtures/Locators.json")

export default class SubSubGategory {
    //Elements 
    SeeAllResults(){
        return cy.get(locators.Sub_CategoryPage.SeeAllResultsBtn)
    }


    //Actions
    ClickOnSeeAllResults() {
        this.SeeAllResults().click()
    }

    
}