const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
      splitChunks: {
          chunks: "all"
      }
  }

  if (isProd) {
      config.minimizer = [
        new TerserPlugin(),
        new CssMinimizerPlugin()
      ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const babelOptions = preset => {
    const opts = {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
        }
    };

    if (preset) opts.options.presets.push(preset)

    return opts
}

module.exports = {
    target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        // main: ["@babel/polyfill", './index.jsx'],
        // analytics: ["@babel/polyfill", './analytics.ts'],
        lesson_2: ["@babel/polyfill", './Lesson_2/index.tsx'],
        // "data-type": ["@babel/polyfill", './lesson_1/data-type.ts']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        hot: isDev,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                        to: path.resolve(__dirname, 'dist/assets')
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new ESLintPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /.(jpg|jpeg|png|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:  babelOptions()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: babelOptions('@babel/preset-typescript')
            },
            {
                test: /\.[tj]sx$/,
                exclude: /node_modules/,
                use: babelOptions('@babel/preset-react')
            },
        ]
    }
}

if (isDev) module.exports.devtool = 'source-map'