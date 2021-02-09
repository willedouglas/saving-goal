module.exports = {
  setupFiles: ['<rootDir>/jest.init.js'],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  },
  testMatch: [
    '**/src/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    'src/**/*/*.{js,vue}',
    '!src/main.js',
    '!src/components/Illustrations/**',
    '!src/router/routes.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
};
