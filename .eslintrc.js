module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: ['airbnb-typescript', "prettier/@typescript-eslint","plugin:prettier/recommended", 'plugin:jsx-a11y/strict','plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      warnOnUnsupportedTypeScriptVersion: false,
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['react', 'eslint-plugin-jsx-a11y', 'import', '@typescript-eslint', 'prettier', 'jest'],
  rules: {
    indent: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx','tsx'] }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'no-underscore-dangle': [0],
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/forbid-prop-types': 'off',
    'global-require': 'off',
    "consistent-return":"off",
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-wrap-multilines': 'off',
    radix: ['error', 'as-needed'],
    'func-names': ['error', 'never'],
    '@typescript-eslint/no-use-before-define': 'off',

    // followiong part just because too many errors incurrent phase
    'react/require-default-props':'off',
    // 'react/no-unused-prop-types':'off',
    // 'react/destructuring-assignment':'off',
    'react/prop-types':'off'
  },
  settings: {
    'import/core-modules': ['react', 'react-dom']
  },
  root: true
};

