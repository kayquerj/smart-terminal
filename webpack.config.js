var path = require("path");
var webpack = require("webpack");
var WebpackBuildNotifierPlugin = require("webpack-build-notifier");


const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
};

module.exports = {

  entry: {
    "SmartTerminal": PATHS.src + '/SmartTerminal.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: 'SmartTerminal',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.pcss$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1,url=false',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build"
    })
  ]
};
