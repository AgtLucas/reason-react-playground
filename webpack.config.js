const path = require('path')

module.exports = {
  entry: {
    simple: './lib/js/src/root.js'
  },

  output: {
    path: path.join(__dirname, "bundleOutputs"),
    filename: '[name].js'
  }
}
