const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  devServer: {
    host: '127.0.0.1', // 如果需要对外访问，可配置0.0.0.0或主机实际IP
    port: 3000, // 服务端口
    open: true, // 服务启动后是否自动打开浏览器访问
    overlay: { // 当有编译错误或警告时，是否将错误或警告信息覆盖全屏
      warnings: true, // 警告信息覆盖全屏
      errors: true, // 错误信息覆盖全屏
    },
    proxy: { // 配置代理
      '/api': { // 被代理路径
        target: 'http://127.0.0.1:3000/mock', // 代理目标，'/api/user'将被代理为 '/mock/api/user'
        pathRewrite: { // 重写请求路径
          '^/api': '' // '/api/user' 代理请求路径将被重写为 '/mock/user'
        }
      }
    },
    before: (app, server, compiler) => {}, // 在内部配置之前自定义配置
    after: require('./mock/mock-server')
  }
}
