module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    },
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.js?(x)",
      "<rootDir>/src/**/?(*.)+(spec|test).js?(x)"
    ],
    "moduleNameMapper": {
      "\\.(css|less|sass|scss)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/tests/__mock
  