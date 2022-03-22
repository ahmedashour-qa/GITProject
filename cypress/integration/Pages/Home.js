var locators = require("../../../cypress/fixtures/Locators.json")

export default class Home {
    //Elements 
    Categories_List_Btn() {
        return cy.get(locators.HomePage.Categories_List_Btn)
    }
    Categories_List_Items() {
        return cy.get(locators.HomePage.Categories_List_Items)
    }
    Sub_Category_List(){
        return cy.get(locators.HomePage.Sub_Category_List)
    }
    TodaysDealLnk(){
        return cy.get(locators.HomePage.TodaysDealLnk)
    }
    Language_CurrencyBtn(){
        return cy.get(locators.HomePage.Language_CurrencyBtn)
    }


    //Actions
    ClickOnCategories_List_Btn() {
        this.Categories_List_Btn().click()
    }

    ClickOnCategoryListItem(SelectedCategory) {
        this.Categories_List_Items().contains(SelectedCategory).click()
    }

    ClickOnSubCategoryListItem(SelectedSubCategory){
        this.Sub_Category_List().contains(SelectedSubCategory).click()
    }

    ClickOnTodaysDealLnk(){
        this.TodaysDealLnk().click({force: true})
    }

    NavigateToLanguage_CurrencyPage(){
        this.Language_CurrencyBtn().click({force:true})
    }
}