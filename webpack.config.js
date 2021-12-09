const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV !== "production"

const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "index_template.html"
  }),
  new MiniCssExtractPlugin({
    filename: devMode ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css"
  })
]

if (devMode) {
  // only enable hot in development
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    clean: true
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
    open: true,
    port: 8080
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults"
                  }
                ],
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
