const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://127.0.0.1:9000",
  token: "b3a68b999de7dea37bcf26925dfd1b540556196f",
  options: {
    "sonar.sources": "./src",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
() => process.exit()
);