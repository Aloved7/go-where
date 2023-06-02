const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, 'src/assets/styles')
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080/mock',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }

})
