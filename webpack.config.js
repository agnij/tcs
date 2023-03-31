const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 开发模式使用，方便查错误
  devtool: "inline-source-map",

  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // 关闭webpack的箭头函数，可选
    },
  },

  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },

  // 配置webpack的loader
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      //设置less文件处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    { browsers: 'last 2 version' }
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },

  // 配置webpack的插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
