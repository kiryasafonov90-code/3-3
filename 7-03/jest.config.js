module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/coverage/**', '!**/*.test.js', '!jest.config.js', '!playwright.config.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};