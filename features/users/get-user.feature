Feature: Get user details

  Scenario: Retrieve a user by ID
    Given I authenticate with valid credentials
    When I get user 1
    Then the response status should be 200
    And the response JSON should contain "id"
    And the response JSON should contain "username"
