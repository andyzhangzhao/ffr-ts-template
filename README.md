## tempale project

## project structure

```
[M] = Must
[S] = Should
[O] = Optional

.
├── [M] README.md            # A project readme file of `Introduce`, `Installation`,  `Running the Project`, `Test the Project`.
├── [S] .gitattributes
├── [S] .eslintignore        # eslint ignore files
├── [M] .eslintrc
├── [S] .prettier.js         # Code formatter
├── [M] .gitignore           # Git ignore file.
├── [M] .babel.config.js     # Project babel config. prefer .js not .rc
├── [M] .editorconfig        # Project code-style for IDE config file.
├── [M] .npmrc               # npm repo config.
├── [S] .huskrc              # Project git hook config.
├── [S] tsconfig.json        # Project js config.
├── [M] .jest.config.js      # Project jest config.
├── [M] .jest.setup.js       # Project jest init config.
├── [S] setupProxy.js        # Project development envionment api proxy or mock.
├── [S] setupTest.js         # Project test config
├── [S] __mocks__            # mocks impl for test.
├── [O] .env.local           # Project personal envionment variables this file Should not in git repo.
├── [S] .env.development     # Project development envionment variables
├── [S] .env.test            # Project development envionment variables
├── [M] .env.production      # Project development envionment variables
├── [M] package.json         # Project package.json
├── [M] package-lock.json    # Project package.json lock file.
├── [S] dist|build|output    # All build-output coverage-out dir
├── [S] config               # All build-related codes dir.
├── [S] scripts              # Project shell scripts dir.
├── [M] public               # Static public assets (not imported anywhere in source code)
│   ├── [M] favicon.ico
│   ├── [M] index.html       # Main HTML page container for app. inject build time build versio
│   └── [O] robots.text      # robots.txt file to give instructions about their site to web robots; this is called The Robots Exclusion Protocol.
    │   ├──
├── [M] src                  # Application source code dir
│   ├── [M] index.ts         # Application bootstrap and rendering
│   ├── [M] App.ts           # Application Main UI
│   ├── [M] assets           # Application import by code assets dir
│   ├── [S] normalize.ts     # Browser normalization and polyfills
│   ├── [M] utils            # Application utils codes dir
│   ├── [M] components       # Global Reusable Pure Components
│   │   ├── user-avatar
│   │   │  ├── [O] __test__
│   │   │  ├── index.ts
│   │   │  ├── UserAvatar.ts
│   │   └───└── [O]style.module.scss
│   ├── [M] routes            # Main route definitions and async split points
│   │    ├── home            # Home Page
│   │    │    ├── components
│   │    │    ├── index.ts
│   │    │    └── HomePage.ts # Must End width Page.
│   │    │    └── style.module.scss
│   │    └────└── user       # User Page
│   │    │    ├── components
│   │    │    ├── index.ts
│   │    │    └── UserPage.ts
│   │    │    └── style.module.scss
|   |    [S] routes|index.ts     # Application routes.
├── [M] models               # App models layer dirs.
│   │   ├── index.ts         # Application modes.
│   │   ├── user             # User Model, you should split into smalls if it's complex
│   │   └── cart.ts
│   └── [S] styles           # Application-wide styles (generally settings)
└──
```
