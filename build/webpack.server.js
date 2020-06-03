const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  entry: {
    server: path.resolve(__dirname, '../src/server.entry.js'),
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.server.html'),
      filename: 'index.server.html',
      excludeChunks: ['server']
    }),
  ],
})