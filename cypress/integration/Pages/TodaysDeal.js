var locators = require('../../fixtures/Locators.json')
export default class TodaysDeal{
    FilterLs() {
        return cy.get(locators.TodaysDealPage.filterList)
    }
    CurrencySymbol(){
        return cy.get(locators.TodaysDealPage.PriceSymbol)
    }

    SelectFilter(SelectedFilter){
        this.FilterLs().contains(SelectedFilter).click()
    }
    
}