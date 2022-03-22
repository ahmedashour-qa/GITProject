/// <reference types="cypress" />
import { Given, When, Then, Before, And } from 'cypress-cucumber-preprocessor/steps'
import Home from "../Pages/Home.js"
import SubGategory from '../Pages/SubGategory.js'

const HomePage = new Home()
const SubCategoryPage = new SubGategory()

Given ('User Navigates to Amazon Home Page', () => {
    cy.visit(Cypress.env("url"))
})
And('User clicks on categories list button',()=>{
    HomePage.ClickOnCategories_List_Btn()
})
And ('User selects category {string}',(SelectedCategory)=>{
  HomePage.ClickOnCategoryListItem(SelectedCategory)  
})
And('User selects sub-category category {string}',(SelectedSubCategory)=>{
    HomePage.ClickOnSubCategoryListItem(SelectedSubCategory)
})
And ('User selects sub-category {string}',(SelectedSubSubCategory)=>{
    SubCategoryPage.ClickOnSubGategory(SelectedSubSubCategory)
})