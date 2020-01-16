module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [ 'prettier', 'plugin:jsx-a11y/strict'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['react', 'eslint-plugin-jsx-a11y', 'import', 'prettier'],
  rules: {
    indent: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'no-underscore-dangle': [0],
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/forbid-prop-types': 'off',
    'global-require': 'off',
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-wrap-multilines': 'off',
    radix: ['error', 'as-needed'],
    'func-names': ['error', 'never'],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['FormLabel'],
        required: {
          every: ['id']
        },
        allowChildren: true
      }
    ]
    // followiong part just because too many errors incurrent phase
    // 'react/require-default-props':'off',
    // 'react/no-unused-prop-types':'off',
    // 'react/destructuring-assignment':'off',
    // 'react/prop-types':'off'
  },
  settings: {
    'import/core-modules': ['react', 'react-dom']
  },
  root: true
};
