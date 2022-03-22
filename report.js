const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/cucumber-json',
  output: 'reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Prod",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 11"
  }
};

reporter.generate(options);