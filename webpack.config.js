const path = require('path')

module.exports = {
  entry: {
    simple: './lib/js/src/simpleRoot.js'
  },

  output: {
    path: path.join(__dirname, "bundleOutputs"),
    filename: '[name].js'
  }
}
