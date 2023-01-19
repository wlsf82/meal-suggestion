const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "dyjimv",
  e2e: {
    supportFile: false
  },
  fixturesFolder: false,
})
