Feature: E-commerce Playground Registration

  Scenario: User can register on the E-commerce Playground
    Given I visit the E-commerce Playground website
    When I click on "Shop by Category"
    And I click on "MP3 Player"
    And I hover over the product and click the add to wishlist icon
    And I click "Register" from the pop-up displayed
    And I fill in necessary details for registration
    And I complete the registration
    Then I should see a successful registration message
