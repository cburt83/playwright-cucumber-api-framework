Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should be redirected to the products page

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I login with invalid credentials
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"