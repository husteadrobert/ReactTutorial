// Entry -> WHere does application start
// Output -> WHere to put final bundle file
//
const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
