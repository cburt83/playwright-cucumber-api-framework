const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10'
    }
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Playwright + Cucumber' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start', value: new Date().toLocaleString() }
    ]
  }
});
