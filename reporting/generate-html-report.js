const fs = require('fs');
const path = require('path');
const report = require('multiple-cucumber-html-reporter');

// Detect environment
const isCI = process.env.GITHUB_ACTIONS === 'true';
const isDocker = fs.existsSync('/.dockerenv');

let deviceName;
let platformName;
let platformVersion;

if (isCI) {
  deviceName = 'GitHub Actions Runner';
  platformName = 'linux';
  platformVersion = 'ubuntu-latest';
} else if (isDocker) {
  deviceName = 'Docker Container';
  platformName = 'linux';
  platformVersion = 'alpine';
} else {
  deviceName = 'Local Machine';
  platformName = 'windows';
  platformVersion = '10';
}

// Optional: environment switching (dev/qa/prod/local)
const environment = process.env.TEST_ENV || 'local';

// --- Normalise feature URIs so Docker absolute paths don't break index.html ---

const jsonReportPath = path.resolve(__dirname, '../test-results/report.json');

if (fs.existsSync(jsonReportPath)) {
  try {
    const raw = fs.readFileSync(jsonReportPath, 'utf8');
    const json = JSON.parse(raw);

    json.forEach(feature => {
      if (feature.uri && feature.uri.startsWith('/app/')) {
        feature.uri = feature.uri.replace('/app/', '');
      }
    });

    fs.writeFileSync(jsonReportPath, JSON.stringify(json, null, 2));
  } catch (err) {
    console.error('Failed to normalise feature URIs:', err);
  }
}

// --- Generate final HTML report ---

report.generate({
jsonDir: '/app/test-results',
reportPath: '/app/test-results/html',
  metadata: {
    service: 'API Automation',
    environment: environment,
    device: deviceName,
    platform: {
      name: platformName,
      version: platformVersion
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'API Automation Framework' },
      { label: 'Environment', value: environment },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toString() }
    ]
  }
});