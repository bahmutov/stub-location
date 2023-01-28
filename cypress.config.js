import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    // baseUrl: 'http://localhost:3000', // need to test index.html in another test...
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  component: {
    setupNodeEvents(on, config) {},
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
    specPattern: ['src/**/*.cy.{js,ts,jsx,tsx}']
  }
})
