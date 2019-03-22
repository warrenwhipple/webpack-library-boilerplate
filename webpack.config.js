var path = require('path');

module.exports = {
  output: {
    filename: 'my-library.js',
    library: 'myLibrary',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
  },
};
