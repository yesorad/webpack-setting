const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env) => {
  const config = {
    entry: './src/index.js',
    devtool: env.mode === 'production' ? false : 'sourcemaps',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    devServer: {
      hot: true,
      host: 'localhost',
      open: true,
      port: 3000,
    },
    mode: env.mode,
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(sass|scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:
                  env.mode === 'production'
                    ? '[contenthash].[ext]'
                    : '[path][name].[ext]',
                publicPath: 'assets',
                outputPath: 'assets',
              },
            },
          ],
        },
        {
          test: /\.(ico|svg|woff|woff2|ttf|eot)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[hash].[ext]',
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-proposal-class-properties'],
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new CleanWebpackPlugin(),
    ],
  };
  return config;
};
