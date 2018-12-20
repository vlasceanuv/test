const scanner = require("sonarqube-scanner");

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: "https://sonarcloud.io",
    token: "3d37d8e8cdaa7637c4c15547e796ce2285e9b3d2",
    options: {
      "sonar.organization": "ui",
      "sonar.projectKey": "com.uipath:license-admin",
      "sonar.projectName": "Licensing Frontend",
      "sonar.projectVersion": "1.1.0",
      "sonar.sources": "src",
      "sonar.exclusions": "src/**/*.spec.ts"
    },
  },
  () => {
    // callback is required
  }
);
