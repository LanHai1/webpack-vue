// 导入路径模块
const path = require("path");

// 导入Vue编译
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 暴露出去
module.exports = {
  // 打包入口 (表示webpack要打包的文件)
  entry: "./src/main.js",
  // 打包出口 (打包至哪个文件)
  output: {
    // 打包后的文件名
    filename: "bundle.js",
    // 打包后的路径
    path: path.resolve(__dirname, "dist")
  },
  // 开发服务器
  devServer: {
    // 网站根目录 类比与 apache www目录
    contentBase: "./dist"
  },
  module: {
    // 规则
    rules: [
      {
        // 配置css文件打包
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // 配置less文件打包
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        // 配置vue文件打包
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
};
