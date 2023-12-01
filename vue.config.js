const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// 解决webpack < 5 node模块不自动加载的问题
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    // node 所需要的包不小心下载到了前端，那就告诉webpack不加载
    resolve:{
      fallback:{
        fs: false,
        tls: false,
        net: false
      }
    }
  },
  transpileDependencies: true,
    // 创建代理服务器,解决跨域问题
    // 下载了client包不用手动代理，不下手动配置为什么不能监听自定义事件？
    // devServer: {
    //     proxy: {
    //         '/socket': {
    //             target: 'http://localhost:3000',
    //             // 搞清楚为什么注释这个能成功连接
    //             pathRewrite: {
    //                 '^/socket': ''
    //             },
    //             ws: true,
    //             changeOrigin: true
    //         },
    //     }
    // },
})




