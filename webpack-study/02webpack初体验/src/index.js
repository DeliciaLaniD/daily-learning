// 入口起点文件
/**
 * 1.运行指令：
 * 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
 * webpack会以./src/index.js为入口文件开始打包，然后输出到./build/built.js，整体打包环境是开发环境
 * 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
 * 生产环境下代码被压缩了
 *
 * 2.结论：
 * webpack能够处理js/json文件；不能处理css/img等其他资源；
 * 生产环境比开发环境多一个压缩js代码；
 * 生产环境和开发环境将ES6模块化编译成浏览器识别的模块化；
 */
function add(a, b) {
    return a + b;
}
console.log(add(1, 2))