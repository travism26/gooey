var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './components/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/components/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
    ]
  },
  externals: {
    'showdown': 'window.Showdown'
  }
};
