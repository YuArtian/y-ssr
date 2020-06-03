const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/client.entry.js'),
  },
  plugins: [
    new VueSSRClientPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.client.html'),
      filename: 'index.client.html',
      minify: false
    }),
  ],
})