# Official Joke API Testing Project

## Description

This project contains automated API tests for the Official Joke API using Postman/Newman. The test suite validates various endpoints and scenarios including random jokes, multiple jokes, and error handling.

## Prerequisites

- Node.js (v12 or higher)
- NPM (Node Package Manager)
- Newman CLI
- Newman HTML Extra Reporter

## Installation

Install dependencies:

```bash
npm install
```

## Running Tests

Execute the test suite using the following command:

```bash
npm run test-api
```

This will:

- Run the Postman collection against the specified environment
- Generate an HTML report in the `/reports` directory

## Test Scenarios

The test suite covers:

1. Random Joke Endpoint

   - Validates response structure
   - Checks required fields
   - Verifies data types

2. Random Ten Jokes

   - Validates array length
   - Checks joke structure
   - Verifies joke types

3. Error Handling
   - Invalid ID handling
   - Overflow ID handling
   - Non-numeric ID handling

## Test Reports

The HTML report is generated after each test run and includes:

- Test execution summary
- Request/Response details
- Test case results
- Response times
- Pass/Fail statistics

Reports can be found in:

```
/reports/report.html
```

Features of the HTML report:

- Dark/Light theme toggle
- Detailed request/response information
- Response body formatting
- Filterable test results
- Expandable/collapsible sections

## Project Structure

```
├── reports/              # Test execution reports
├── package.json          # Project configuration and scripts
├── teste-env.json        # Environment variables
└── Teste.collection.json # Postman collection file
```

## Notes

- The HTML report is configured with a dark theme by default
- Failed tests will be highlighted in red in the report
- Response times and data sizes are tracked for performance monitoring

---

For more information about the Official Joke API, visit: https://github.com/15Dkatz/official_joke_api
