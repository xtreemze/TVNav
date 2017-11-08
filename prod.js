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
        "videojs-contrib-hls",
        "videojs-contrib-media-sources",
        "videojs-flash"
      ],
      app: "./app.js"
    },
    output: {
      path: __dirname,
      filename: "build/[name].bundle.[chunkhash].js"
    },

    stats: {
      // warnings: false
    },
    resolve: {
      alias: {
        webworkify: "webworkify-webpack-dropin"
      }
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        // {
        //   test: /indexB.html$/,
        //   loaders: [
        //     "file-loader?name=index.[ext]",
        //     "extract-loader",
        //     "html-loader"
        //   ]
        // },
        // {
        //   test: /html$/,
        //   loaders: [
        //     "file-loader?name=[name].[ext]",
        //     "extract-loader",
        //     "html-loader"
        //   ]
        // },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=build/[name].[hash].[ext]",
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
          // use: [
          //   {
          //     loader: "babel-loader?cacheDirectory",
          //     options: {
          //       presets: [["env", { modules: false }]]
          //     }
          //   }
          // ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "TVNav",
        template: "indexB.html"
      }),
      // new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        // filename: "build/vendor.bundle.[chunkhash].js",
        // (Give the chunk a different name)

        minChunks: Infinity
        // (with more entries, this ensures that no other module
        //  goes into the vendor chunk)
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
