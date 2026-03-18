Feature: List users
  The system should return a paginated list of users.

  Scenario: List users on page 2
    When I list users on page 2
    Then the response status should be 200
    And the response JSON should contain "users"

