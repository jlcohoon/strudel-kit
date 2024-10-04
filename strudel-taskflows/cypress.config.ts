import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5175/strudel-kit/demo',
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 'src/**/*.cy.{js,jsx,ts,tsx}']
  },
});
