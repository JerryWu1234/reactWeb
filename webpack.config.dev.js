const path = require('path')
const fs = require('fs')
//__filename 表示当前正在执行的脚本的文件名
//__dirname 表示当前执行脚本所在的目录
const srcRoot = path.resolve(__dirname, 'src')
const devPath = path.resolve(__dirname, 'dev') // 输出当前路径加dev的路径
const pageDir = path.resolve(srcRoot, 'page')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const mainFile = 'index.js'

/**
 * 自动查找文件下的index.js 入口文件
 *
 **/
function getEntry () {
    let entryMap = {};
    fs.readdirSync(pageDir).forEach((pathName) => {
        // 拼接当前文件完整路径
        let fullPathName = path.resolve(pageDir, pathName)
        /**
        * * stats.isFile() 如果是文件返回 true，否则返回 false。
         * stats.isDirectory() 如果是目录返回 true，否则返回 false。
        * */
        let stat = fs.statSync(fullPathName)
        let fileName = path.resolve(fullPathName, mainFile)
        // fs.existsSync(path) 检验文件是否存在
        if(stat.isDirectory() && fs.existsSync(fileName)){
            entryMap[pathName] = fileName;
        }
    })
    return entryMap
}
const entryMap = getEntry()
module.exports = {
    mode: "development",
    output: {
        path: devPath,
        filename: "[name].min .js"
    },
    entry: entryMap,
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: [{loader: "babel-loader"}], include: srcRoot},
            {test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot}, //include只包含src文件
            {test: /\.sass$/,use:['style-loader', 'css-loader', 'sass-loader'], include: srcRoot},
            {test: /\.(png|jpg|jpeg)&/, use: 'url-loader?limit=8192', include: srcRoot}, //limit 文件小于8m就会专程base64
        ],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
