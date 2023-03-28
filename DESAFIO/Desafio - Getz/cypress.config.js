const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kpc9jn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    baseUrl: 'https://getz-digital-menu-f2wbk2ft3-andersoncruz-hexalabcom.vercel.app/home',
    defaultCommandTimeout: 9000
  },
});
