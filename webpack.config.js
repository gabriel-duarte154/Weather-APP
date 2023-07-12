const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: ['css-loader', 'style-loader'],
      },
      {
        test: /.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
