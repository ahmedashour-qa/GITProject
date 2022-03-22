var locators = require("../../../cypress/fixtures/Locators.json")

export default class SubGategory {
    //Elements 
    SubGategory(){
        return cy.get(locators.Sub_CategoryPage.Sub_Sub_Category)
    }


    //Actions
    ClickOnSubGategory(SelectedSubSubCategory) {
        cy.get(`[aria-label="${SelectedSubSubCategory}"]`).click()
    }

    
}