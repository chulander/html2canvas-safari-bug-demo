module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-plusplus': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    camelcase: 'off',
    'react/prefer-stateless-function': 1,
    'react/jsx-filename-extension': 1,
  },
};
