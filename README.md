# metalsmith-webpack-dev-server
A metalsmith plugin to start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to use in development. Best used together with [metalsmith-webpack](https://github.com/christophercliff/metalsmith-webpack).

## Installation

    $ npm install metalsmith-webpack-dev-server

## Basic Example

```js
var metalsmith = require('metalsmith');
var webpackDevServer = require('metalsmith-webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

metalsmith(__dirname)
  .use(webpackDevServer(webpackConfig))
  .build(function(err) {
    if (err) { throw err; }
  });
```

This will start webpack-dev-server on localhost:8081 using default configuration. Pass webpack-dev-server options as a second argument.

## Advanced Example

```js
var metalsmith = require('metalsmith');
var webpackDevServer = require('metalsmith-webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

metalsmith(__dirname)
  .use(webpackDevServer(webpackConfig, {
    hot: true, // Enable HMR
    proxy: {
        '*': 'http://localhost:8080'
    },
    // webpack-dev-middleware options
    quiet: true,
    noInfo: true,
    publicPath: 'http://localhost:8081/',
    stats: {colors: true}
  }))
  .build(function(err) {
    if (err) { throw err; }
  });

```

For more information about webpack-dev-server options see: https://webpack.github.io/docs/webpack-dev-server.html

## Options

### webpackConfig
Type: `Object`

Your webpack config. See the [webpack configuration][webpack configuration] documentation for details.

### options
Type: `Object`

webpack-dev-server options. See https://webpack.github.io/docs/webpack-dev-server.html for details.

## License

  MIT
