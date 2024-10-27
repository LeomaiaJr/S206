# Cypress UI Testing Project with Mochawesome Reporter

This project contains automated UI tests using Cypress with Mochawesome reporting integration.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

Install the project dependencies:

```bash
npm install
```

Install Cypress and reporting dependencies:

```bash
npm install --save-dev cypress
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator cypress-multi-reporters
```

## Project Structure

```
├── cypress/
│   ├── e2e/              # Test files
│   ├── fixtures/         # Test data
│   ├── support/          # Support files
│   └── reports/          # Generated test reports
├── cypress.config.js     # Cypress configuration
├── package.json
└── README.md
```

## Running Tests

### Run tests in headless mode with report generation:

```bash
npm run test
```

### Run tests in Cypress Test Runner:

```bash
npx cypress open
```

## Test Reports

After running tests with `npm run test`, the following reports will be generated:

- JSON reports: `cypress/reports/mocha/*.json`
- HTML report: `cypress/reports/mocha/report.html`

The HTML report includes:

- Test results summary
- Detailed test steps
- Screenshots for failed tests
- Test duration
- Pass/fail statistics
- Interactive charts

## Available Scripts

- `npm run clean:reports`: Cleans and creates reports directory
- `npm run scripts`: Runs Cypress tests
- `npm run combine-reports`: Merges multiple JSON reports
- `npm run generate-report`: Generates HTML report from merged JSON
- `npm run test`: Executes complete test suite with reporting

## Notes

- Screenshots and videos of test runs are automatically saved in `cypress/screenshots` and `cypress/videos`
- Failed tests automatically capture screenshots that are included in the report
- The Mochawesome report provides a clean and interactive interface for analyzing test results
