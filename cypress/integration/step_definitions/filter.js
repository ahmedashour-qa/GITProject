/// <reference types="cypress" />
import { Given, When, Then, Before, And } from 'cypress-cucumber-preprocessor/steps'
import Home from "../Pages/Home.js"
import TodaysDeal from '../Pages/TodaysDeal.js'

const HomePage = new Home()
const TodaysDealPage = new TodaysDeal()


And('User Clicks on Todays Deals',()=>{
    HomePage.ClickOnTodaysDealLnk()
})
And('User selects {string}',(SelectedFilter)=>{
TodaysDealPage.SelectFilter(SelectedFilter)
})
Then('The selected {string} filter shall be checked',(selectedFilter)=>{
    TodaysDealPage.FilterLs().contains(selectedFilter).parent().find('input').should('be.checked')
})