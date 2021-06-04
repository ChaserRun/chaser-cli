var path = require('path');
var { WebPlugin } = require('web-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './webSite/index.js',
  }, 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: [path.resolve(__dirname, 'webSite')],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: [path.resolve(__dirname, 'webSite')],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:8].[ext]'
          }
        },
      },
      {
        exclude: [/\.js$/, /\.html$/, /\.json$/, /\.(css|less)$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    fallback: {
      "crypto": false
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9800,
    proxy: {
      '/api': 'http://localhost:60325'
    },
  },
};