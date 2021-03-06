'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    inject: 'body'
  }),
];
