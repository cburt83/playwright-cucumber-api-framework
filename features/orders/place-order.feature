Feature: Place an order
  Users should be able to create new orders.

  Scenario: Create a new order
    Given I authenticate with valid credentials
    When I place an order for product "1" with quantity 2
    Then the response status should be 201
    And the order ID should be returned
