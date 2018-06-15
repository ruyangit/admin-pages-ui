'use strict'
// 基础配置文件
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 定义的路径拼接方法(join直接的拼接, path.resolve等于在终端输入路径)
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

//add
const entris = require('./entris')

/*
    __dirname 指的是当前你这个当前文件在 硬盘文件夹全路径 
    例如这个base.conf.js文件是在 build文件夹里
    那么 __dirname = /硬盘路径/build
*/

const baseWebpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    vendors: ['vue']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  /**
   * 移除 element-ui 组件库 通过外部cdn的方式引用
   */
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~login': resolve('src/modules/login'),
      '~user': resolve('src/modules/user'),
      '~notification': resolve('src/modules/notification'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
		exclude: [resolve('src/icons/svg')], // 默认不处理该文件夹的命中的文件
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: [
          resolve('src/icons/svg').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
        ],  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
baseWebpackConfig.entry = Object.assign(baseWebpackConfig.entry, entris)
module.exports = baseWebpackConfig
