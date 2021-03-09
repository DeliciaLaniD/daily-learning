/*
指示webpack干哪些活。当运行webpack指令的时候，会加载这里面的配置。
所有构建工具都是基于nodejs平台运行的，模块化默认采用commonjs
 */

// resolve用来拼接绝对路径的方法
const {resolve} = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        //__dirname 是nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    }
}