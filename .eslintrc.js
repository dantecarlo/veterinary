module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true
  },

  plugins: ['react'],
  rules: {
    // first argument: 0 - silent, 1 - warning, 2 - error
    strict: [2, 'safe'],
    'no-debugger': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'no-trailing-spaces': 2,
    'keyword-spacing': 2,
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': [2, 'always'],
    'vars-on-top': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'comma-dangle': [2, 'never'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'guard-for-in': 2,
    'no-eval': 2,
    'no-with': 2,
    'valid-typeof': 2,
    'no-unused-vars': 2,
    'no-continue': 1,
    'no-extra-semi': 1,
    'no-unreachable': 1,
    'no-unused-expressions': 1,
    'no-magic-numbers': 1,
    'max-len': [1, 80, 4],
    'react/prefer-es6-class': 1,
    'react/prop-types': [1],
    camelcase: [1],
    semi: ['error', 'never']
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53' // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  }
};
