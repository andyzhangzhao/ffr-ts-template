module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-react-display-name',
    [
      '@babel/plugin-transform-destructuring',
      {
        useBuiltIns: true,
        selectiveLoose: ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue']
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        useBuiltIns: true
      }
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: true
      }
    ],
    [
      'babel-plugin-transform-react-remove-prop-types',
      {
        removeImport: true
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs'
          }
        ]
      ],
      plugins: ['require-context-hook']
    }
  }
};
