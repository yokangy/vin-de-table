module.exports = {
  entry: [
    './src/app/index.js'
  ],
  output: {
    path: __dirname + '/src/bin',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
