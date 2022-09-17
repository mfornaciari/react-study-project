export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.jsx$': 'babel-jest',
  },
  "moduleNameMapper": {
    '^.+\\.css$': "<rootDir>/__mocks__/styleMock.js",
    '^.+\\.png$': "<rootDir>/__mocks__/fileMock.js",
  }
};
