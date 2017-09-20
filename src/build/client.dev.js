const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.client.config.js')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  hot: true,
})

server.listen(4000, 'localhost', () => {
  console.log('Client dev bundle now available at localhost:4000')
})
