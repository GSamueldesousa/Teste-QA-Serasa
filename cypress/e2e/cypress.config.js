const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    env: {
      TRELLO_API_KEY: process.env.TRELLO_API_KEY,
      TRELLO_API_TOKEN: process.env.TRELLO_API_TOKEN
    }
  }
})
