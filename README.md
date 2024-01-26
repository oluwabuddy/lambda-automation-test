# Lambda-automation-test


## This project demonstrates the usage of [Cypress] + Cucumber for end-to-end testing of an e-commerce website and API testing. It includes both UI and API test suites.

# Table of Contents
- [Introduction](#introduction)
- [Configuration](#configuration)
- [Installation](#installation)
- [Usage](#usage)
- [UI Testing](#ui-testing)
- [API Testing](#api-testing)
- [Reporting](#reporting)
- [License](#license)

## Introduction
This project showcases the capabilities of Cypress as a testing framework for automating UI tests and API tests. It includes a test suite for an e-commerce website and another for fetching data from the JSONPlaceholder API.

## Configuration
The Cypress configuration file `cypress.config.js` includes settings for test execution, such as the base URL, viewport dimensions, and test reporting options.

## Installation
To get started, follow these steps:

Clone this repository.
Navigate to the project directory in your terminal.
Run `npm install` to install the project dependencies.

## Usage
You can run the Cypress test runner with the following command:

```npm run cy:open```

OR You can run the Cypress test in terminal to generate report with the following command:

```npm cypress open```

## UI Testing
The UI test suite is focused on testing the functionality of an e-commerce website using the Page Object design pattern. The tests cover scenarios related to searching for products,Hover over the product, and click the add to wishlist icon from the icons
displayed, Click Register from the pop up displayed, Fill necessary details, Complete registration.

Test scripts can be found in the `cypress/e2e directory`, specifically in the `eCommerce` subdirectory.

## API testing
The API test suite fetches data from the JSONPlaceholder API. It includes tests to: Create a auth Token, Get all bookingIDs, Create a Booking, Update a booking

Test scripts can be found in the `cypress/e2e/api-test` directory, specifically in the `api` subdirectory.

## Reporting
The project utilizes the `cypress-mochawesome-reporter` for generating detailed test reports. Reports are generated in the `mochawesome-report directory`.

## License
This project is licensed under the [ISC License](https://www.google.com)
