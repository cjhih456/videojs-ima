module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    'sourceType': 'module',
  },
  plugins: [
    'prettier'
  ],
  'rules': {
    'jsdoc/check-types': 'error',
    'space-infix-ops': 'error',
    'no-console': ['error', {
      'allow': ['warn', 'error']
    }],
    'comma-dangle': ["error", "never"],
    'arrow-parens': ['error', 'as-needed']
  },
  'plugins': [
    'jsdoc',
  ],
};

