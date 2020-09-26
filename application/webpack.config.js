const TerserPlugin = require('terser-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const packageJSON = require('./package.json');

const publicFolderRelativePath = './dist';
const fileName = packageJSON.name;
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: { [fileName]: packageJSON.main },
    output: {
      path: path.resolve(__dirname, publicFolderRelativePath),
      filename: 'index.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              envName: isProduction ? 'production' : 'development'
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    stats: {
      assets: true,
      colors: true,
      errors: true,
      errorDetails: true,
      hash: true
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          },
          extractComments: false
        })
      ]
    },
    performance: {
      hints: 'warning'
    },
    plugins: [
      new WebpackNotifierPlugin({
        title: fileName,
        alwaysNotify: true
      }),
      new HtmlWebPackPlugin({
        template: '../public/index.html'
      })
      // , new BundleAnalyzerPlugin()
    ],
    devServer: {
      historyApiFallback: true
    }
  };
  if (!isProduction) {
    config.devtool = 'source-map';
  }
  return config;
};
