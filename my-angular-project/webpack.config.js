module.exports = {
  context: __dirname + '/app', // 上下文
  entry: './index.js',
  output: {
    path: __dirname +'/app',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'}
    ]
  }
}