const path = require('path');

module.exports = {
  entry: './src/app.js',  // Atualize o caminho aqui
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};
