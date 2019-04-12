const path = require('path')
const fs = require('fs')
//__filename 表示当前正在执行的脚本的文件名
//__dirname 表示当前执行脚本所在的目录
const srcRoot = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist') // 输出当前路径加dev的路径
const pageDir = path.resolve(srcRoot, 'page')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
// const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const mainFile = 'index.js'

/**
 * 获取所有的多文件主页面
 *
 **/
function getHtmlArray (entryMap) {
    let htmlArray = []
    Object.keys(entryMap).forEach((item, index) => {
        let fullPathName = path.resolve(pageDir, item)
        let fileName = path.resolve(fullPathName, `${item}.html`)
        if(fs.existsSync(fileName)){
            htmlArray.push(new HtmlWebpackPlugin({
                filename: `${item}.html`,
                template: fileName,
                // item,common引入指定名字的js模块
                chunks: ['common', item]
            }))
        }
    })
    return htmlArray
}

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
         * fs.Stats 对象所有的文件状态才能调用isfile等方法
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
const htmlArray = getHtmlArray(entryMap)
module.exports = {
    mode: "production",
    output: {
        path: distPath,
        filename: "js/[name].min.js"
    },
    resolve: {
        // 省略扩展名
        extensions: ['.js'],
        // 快捷路径
        alias: {
            component: path.resolve(srcRoot, 'component')
        }
    },
    entry: entryMap,
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: [{loader: "babel-loader"},{loader: "eslint-loader"}], include: srcRoot},
            //   MiniCssExtractPlugin.loader 模块不能和style-loader一起使用
            // {test: /\.css$/, use: [MiniCssExtractPlugin.loader,  'css-loader'], include: srcRoot}, //include只包含src文件
            {test: /\.scss$/,use:[MiniCssExtractPlugin.loader, {loader: 'css-loader',options: {minimize: true}}, 'sass-loader', {
                    loader: "sass-resources-loader",
                    // 设置全局变量css的函数
                    options: {
                        resources: srcRoot + '/component/common.scss'
                    }
                }], include: srcRoot},
            {test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192', include: srcRoot}, //limit 文件小于8m就会专程base64
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ],
    },
    // 抽离css、js的优化
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 抽离node_modules生成common.js
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    name: 'common'
                }
            },


        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ].concat(htmlArray)
}
