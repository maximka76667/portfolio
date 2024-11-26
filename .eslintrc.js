module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-underscore-dangle': 'off',
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'react/jsx-one-expression-per-line': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    indent: 'off'
  }
};
