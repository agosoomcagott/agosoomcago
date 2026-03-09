const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPages = ["index", "projects", "feedback"];

module.exports = {

  mode: "development",
  entry: htmlPages.reduce( (config, page) => {
    config[page] = `./src/app/${page}.js`;
    return config;
  }, {} ),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]"
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 5000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|tiff)$/i,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name][hash][ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "fontsicons/[name][hash][ext]"
        }
      }
    ]
  },
  plugins: [].concat(
    htmlPages.map( page => new HtmlWebpackPlugin( {
      inject: true,
      title: "AGO SOO McAGO Official",
      filename: `${page}.html`,
      template: `src/${page}.html`,
      chunks: [page]
    } )
    ),
    new MiniCssExtractPlugin({ filename: "css/[name][contenthash].css"})
  )
};