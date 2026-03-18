Feature: Login

  Scenario: Successful login
    Given I authenticate with valid credentials
    Then the response status should be 200
    And the response JSON should contain "accessToken"

  Scenario: Login fails with invalid password
    Given I authenticate with username "emilys" and password "wrongpass"
    Then the response status should be 400
    And the response JSON should contain "message" with value "Invalid credentials"

  Scenario: Login fails with missing password
    Given I authenticate with username "emilys" and password ""
    Then the response status should be 400
    And the response JSON should contain "message" with value "Username and password required"

  Scenario: Login fails with empty credentials
    Given I authenticate without credentials
    Then the response status should be 400
    And the response JSON should contain "message" with value "Username and password required"
