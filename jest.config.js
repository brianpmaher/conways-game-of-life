// Jest documentation: https://jestjs.io/docs/configuration

// noinspection JSUnusedGlobalSymbols
export default {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // Disables code transforms to emit ES modules rather than default CommonJS
  transform: {},

  // Ignore files that look like test files in these locations
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/scripts/test.js',
  ]
}
