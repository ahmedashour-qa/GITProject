/// <reference types="cypress" />
import { Given, When, Then, Before, And } from 'cypress-cucumber-preprocessor/steps'
import Home from "../Pages/Home.js"
import CurrencyLanguage from '../Pages/CurrencyLanguage.js'
import TodaysDeal from '../Pages/TodaysDeal.js'

const HomePage = new Home()
const CurrencyLanguagePage = new CurrencyLanguage()
const TodaysDealPage = new TodaysDeal()


And('User Clicks on Language & Currency Setup page',()=>{
    HomePage.NavigateToLanguage_CurrencyPage()
})

And('User clicks on currency list picker and chooses {string}',(ChoosenCurrency)=>{
    CurrencyLanguagePage.SelectCurrency(ChoosenCurrency)
})
And('User clicks on save changes button',()=>{
    CurrencyLanguagePage.clickOnsaveChangesBtn()
})
Then('User should find currency symbol {string} be displayed beside products price at Today Deals page',(CurrencySymbol)=>{
    TodaysDealPage.CurrencySymbol().should('contain.text', CurrencySymbol);
})