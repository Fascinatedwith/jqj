'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = process.env.TITLE // page title
const port = process.env.port // dev port
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        target: 'http://ihrm.itheima.net/', // 这里不用带api  要访问的根地址
        changeOrigin: true // 是否跨域
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}