const { defineConfig } = require('cypress');
module.exports = {
  reporter: 'cypress-mochawesome-reporter',
 // projectId: "v4584h", 
 projectId: "2wk4wq",
  reporterOptions: {
   
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    enableCode:false,
    embeddedvideos: true,
    video: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here

    },
  },
};
