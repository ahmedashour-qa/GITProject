Feature:  Amazon currency change
    Background: Background name
        Given User Navigates to Amazon Home Page

    Scenario: Check the selected currency displayed for the products' price
        When User Clicks on Language & Currency Setup page
        And User clicks on currency list picker and chooses "AED - Arab Emirates Dirham"
        And User clicks on save changes button
        And User Clicks on Todays Deals
        Then User should find currency symbol "AED" be displayed beside products price at Today Deals page