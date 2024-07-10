const path = require('path');
const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');

module.exports = merge(commonConfiguration, {
  stats: 'errors-warnings',
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../static'),
    },
    devMiddleware: {
      publicPath: '/dist/',
    },
    compress: true,
    hot: true,
    port: 8080,
    open: true,
    client: {
      overlay: false,
    },
    onListening: function (devServer) {
      const protocol = devServer.https ? 'https' : 'http';
      const host = devServer.host || 'localhost';
      const port = devServer.port;

      console.log(`Project running at: ${protocol}://${host}:${port}`);
    },
  },
});
