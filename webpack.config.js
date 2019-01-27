'use strict';

const path = require('path');
const rules = require('./build/rules');
const plugins = require('./build/plugins');

module.exports = (env, arg) => {
  return {
    cache: true,

    devtool: 'inline-source-map',

    entry: {
      /**
       * Javascript files
       */
      app: './src/app.js',
      vendor: './src/vendor.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[ext]/[name].[ext]',
      sourceMapFilename: '[ext]/[name].[ext]',
    },

    resolve: {
      extensions: ['.js', '.css', '.scss', '.json'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },

    module: {
      rules,
    },

    plugins,

    stats: {
      entrypoints: false,
      modules: false,
    },

    devServer: {
      contentBase: './public',
      port: 3000,
    },
  };
}
