Feature: Add Product to Cart

  Scenario: Add a product to the cart
    Given I am logged in with valid credentials
    When I add the first product to the cart
    Then the cart badge should show "1"