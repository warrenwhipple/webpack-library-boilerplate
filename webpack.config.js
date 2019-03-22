var path = require('path');

module.exports = {
  output: {
    filename: 'my-library.js',
    library: 'myLibrary',
    libraryTarget: 'umd',
  },
  externals: {
    jquery: 'jQuery',
  },
};
