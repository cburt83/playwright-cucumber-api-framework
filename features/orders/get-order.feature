Feature: Get order details

  Scenario: Retrieve an order by ID
    Given I authenticate with valid credentials
    When I get order 1
    Then the response status should be 200
    And the order response should contain "id"
    And the order response should contain "products"
