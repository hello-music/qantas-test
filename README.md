# Qantas-test


[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[Live demo](https://qantas-test.firebaseapp.com)

There are three steps developed during the completion of this test:

1. Fetch data with Graphql - **graphql**
2. Digest response data - **reducers**
3. UI and UX - **components + reducers**

### Directory Layout

```shell

├── /app/                       # Development work
│   ├── /components/            # Shared or generic UI components
│   ├── /config/                # Core framework
│   │   ├── /constants.js       # Mock response and other constants
│   │   ├── /rountes.js         # Handles routing 
├── /containers/                # React component containers that have only business logic and render stateless functional components
├── /helpers/                   # Helper functions/utilities
│   ├── api.js                  # Fetch data
│   ├── formatters.js           # Format string
├── /redux/                     # Redux
│   ├── /modules/               # Actions + reducers
├── /sharedStyles/              # Shared styles
│   ├── /styles.css/            # The  css file
├── /node_modules/              # 3rd-party libraries and utilities
├── .babelrc                    # Utility and helper classes
├── .eslintrc                   # Utility and helper classes
│── README.md                   # This file that you are reading
│── package.json                # The list of project dependencies and NPM 
└── webpack.config.babel.js     # Bundling and optimization settings for Webpack
```

## Stack

### Framework
- React
- Redux
- React-router
- Graphql

### Plugins
- Babel
- Immutable - **make states immutable and having performance benefits**
- Redux-thunk - **function blocks of actions**
- React-router-redux - **add url to redux store**
- Redux-mock-store - **crate mock store for testing**
- graphql-tools - **mock server**

#### Bundling/Server
- Webpack
- Webpack-server
- Css modules - **modular css for components**
- Hot modules replacement

### Code Quality Control
- Eslint
- Eslint-plugin-standard - **personal preference**

### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

Clone or download this project.

Install the dependencies and devDependencies and start the server.

```sh
$ cd qantas-test
$ npm install
$ npm run start
```

Go to browser: localhost:3000

### Todos

 - Plugin Relay
 - Add tests
 - UI/UX improvements
 - sri integrity

License
----

MIT