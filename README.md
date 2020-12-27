# Tic Tac Toe(T3-UI)

Tic Tac Toe(T3) ui has been implemented in this repository.


## Installation

Step 1: Prerequisites

   * Make sure T3-api is running.

Step 2: Install NodeJS and packages

   * Clone repository and go to project directory.
   * Run `cp .env.example .env`.
   * Run `npm install`
   * Run `npm start`   
   * Access T3-UI via http://localhost:3000

## Unit Tests

Please `npm run test` for running unit testing.


## Technical Notes

1) Added SwaggerClient for easily manipulating api. It does not require to know route or method.
2) Added `redux-saga` library for managing side effects.


## Known Issues

1) `History` component is rendering several times for each step.
2) Saga is calling `SwaggerClient()` method that taking api route `api/v1/swagger.json` as param each time of sending request to api. Thats required to optimize.
