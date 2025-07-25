export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        useESM: true
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(preact|@testing-library)/)'
  ],
  testMatch: ['**/*.test.(ts|tsx)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};