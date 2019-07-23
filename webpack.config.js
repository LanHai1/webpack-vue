// 导入路径模块
const path = require("path");

// 暴露出去
module.exports = {
  // 打包入口 (表示webpack要打包的文件)
  entry: "./src/index.js",
  // 打包出口 (打包至哪个文件)
  output: {
    // 打包后的文件名
    filename: "bundle.js",
    // 打包后的路径
    path: path.resolve(__dirname, "dist")
  }
};
