const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function dev(env) {
  return {
    entry: {
      vendor: [
        "zenscroll",
        "fscreen",
        "video.js",
        "videojs-contrib-hls"
        // "videojs-contrib-media-sources",
        // "videojs-flash"
      ],
      entry: "./app/entry.js"
    },
    output: {
      path: __dirname + "/public",
      // publicPath: "./public/",
      filename: "./js/[name].js?[hash]",
      chunkFilename: "./js/[id].js?[hash]"
    },
    stats: {
      // warnings: false
    },
    resolve: {
      alias: {
        webworkify: "webworkify-webpack-dropin"
      }
    },
    devtool: "cheap-source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=./img/[name].[ext]?[hash]",
            {
              loader: "image-webpack-loader",
              options: {
                gifsicle: {
                  interlaced: false
                },
                // optipng: {
                //   optimizationLevel: 7
                // },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                // webp: {
                //   quality: 75
                // }
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "url-loader?limit=1000000"
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "TVNav",
        template: "./app/index.ejs"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",

        minChunks: Infinity
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      })
    ]
  };
};
