const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelConf = require('./.babelrc.client.json')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    // These next two lines must be set in order for hot reloading to work. The
    // first seems to activate WDS updates, and the second perform the HMR.
    'webpack-dev-server/client?http://localhost:4000/',
    'webpack/hot/dev-server',
    path.resolve(__dirname, '..', 'client', 'client.js'),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf
          },
          {
            loader: 'ts-loader'
          },
        ],
      },
    ],
  },
  output: {
    filename: 'client.dev.bundle.js',
    path: path.resolve(__dirname, '..', '..', '..', 'dist'),
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates', 'index.ejs')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  profile: true,
  resolve: {
    alias: {
      Redux: path.resolve(__dirname, '..', '..', 'client', 'Redux'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '*'],
    mainFields: ['browser', 'module', 'main', 'types'],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  }
}
