module.exports = {
  parser: 'babel-eslint',
  env: {
    'node': true,
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
};
