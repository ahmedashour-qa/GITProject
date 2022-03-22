var locators = require("../../../cypress/fixtures/Locators.json")

export default class CurrencyLanguage {
    //Elements 
    currency_list_picker(){
        return cy.get(locators.Language_CurrencyPage.currency_list_picker)
    }
    currency_list(){
        return cy.get(locators.Language_CurrencyPage.currency_list)
    }
    saveChangesBtn(){
        return cy.get(locators.Language_CurrencyPage.saveChangesBtn)
    }

    //Actions
    ClickOnCurrency_list_picker(){
        this.currency_list_picker().click({force:true})
    }

    SelectCurrency(ChoosenCurrency){
        this.currency_list_picker().click({force:true})
        this.currency_list().contains(ChoosenCurrency).click({force:true})
    }

    clickOnsaveChangesBtn(){
        this.saveChangesBtn().click()
    }
        
    
}