const OfflinePlugin = require("offline-plugin");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const ClosureCompiler = require("google-closure-compiler-js").webpack;
const HtmlMinifierPlugin = require("html-minifier-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//
module.exports = function prod(env) {
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
      app: "./app/entry.js"
    },
    output: {
      path: __dirname + "/public",
      // publicPath: "./public/",
      filename: "./js/[name].js?[chunkhash]",
      chunkFilename: "./js/[id].js?[chunkhash]"
    },
    stats: {
      warnings: false
    },
    resolve: {
      alias: {
        webworkify: "webworkify-webpack-dropin"
      }
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  autoprefixer: false,
                  minimize: true,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              "postcss-loader"
            ]
          })
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
      new ExtractTextPlugin("./css/[name].css?[chunkhash]"),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",

        minChunks: Infinity
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      }),
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          output: {
            comments: false
          }
        }
      }),
      new HtmlMinifierPlugin({
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeEmtpyElements: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        minifyURLs: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true
      }),

      new OfflinePlugin({
        externals: [
          // "./js/materialize.min.js",
          // "./js/jquery-3.2.1.min.js",
          // "./css/video-js.min.css",
          // "http://vjs.zencdn.net/6.2.8/video.js",
          // "https://unpkg.com/videojs-flash/dist/videojs-flash.js",
          // "https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"
        ],
        caches: "all",
        // responseStrategy: "network-first",
        responseStrategy: "cache-first",
        // updateStrategy: "all",
        updateStrategy: "changed",
        minify: "true",
        autoUpdate: 1000 * 60 * 60 * 2,
        ServiceWorker: {
          events: "true"
        },
        AppCache: {
          events: "true"
        }
      })
    ]
  };
};
