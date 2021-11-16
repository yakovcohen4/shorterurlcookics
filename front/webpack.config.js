const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: { index: './app/main.js', login: './app/login.js' },
  mode: 'development',
  watch: true,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    static: path.resolve(__dirname, 'app'),
    hot: true,
    compress: true,
    port: 3001,
    host: '127.0.0.1',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/home.html',
      filename: './home.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './app/login.html',
      filename: './login.html',
      chunks: ['login'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
