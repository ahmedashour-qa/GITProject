Feature:  Amazon Search
    Background: Background name
        Given User Navigates to Amazon Home Page
    Scenario: Check the total displayed number of results for category Smart Home | Televisions

        When User clicks on categories list button
        And User selects category "Smart Home"
        And User selects sub-category category "Home Entertainment"
        And User selects sub-category "Smart Televisions"
