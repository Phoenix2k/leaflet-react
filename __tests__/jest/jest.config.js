const { defaults } = require('jest-config');
module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: '__tests__/coverage',
  globals: {
    'ts-jest': {
      babelConfig: '<rootDir>/.babelrc.json',
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss|styl)$': 'identity-obj-proxy'
  },
  preset: 'ts-jest',
  rootDir: '../../',
  setupFiles: ['<rootDir>/__tests__/jest/jest.setup.js', 'jest-localstorage-mock'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/unit/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  verbose: true
};
