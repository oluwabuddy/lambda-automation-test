const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    specPattern: "cypress/e2e/**/*.{js,feature}",
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportFilename: "cypressMochawesomeReport",
      videoOnFailOnly: "true",
      overwrite: true,
    },
    screenshots: {
      enabled: true,
    },
  },
});