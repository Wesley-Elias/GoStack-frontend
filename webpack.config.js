const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/, // A string tem que terminar com .js
        exclude: /node_modules/, // Arquivos que estão dentro do node_modules não passarão pelo processo do babel
        use: {
          loader: 'babel-loader',  // Toda vez que for precisar de um arquivo .js e ele não estiver na pasta node_modules, será convertido usando babel
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ]
      },
      {
        test: /.*\.(gif|png|jpg|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};