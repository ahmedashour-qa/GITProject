Feature:  Amazon Today's Deal Filter
    Background: Background name
        Given User Navigates to Amazon Home Page

    Scenario: Check filter by department in Deals and Promotions page
        When User Clicks on Todays Deals
        And User selects "Software"
        Then The selected "Software" filter shall be checked