const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'dyjimv',
  e2e: {
    setupNodeEvents(on, config) {
      return {
        browsers: config.browsers.filter(browser => browser.name !== 'electron')
      }
    }
  },
  fixturesFolder: false,
})
