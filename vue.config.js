const path = require('path');
module.exports = {
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
      alias: {
        '@': path.resolve(__dirname, './src'),
        'components' : path.resolve(__dirname, './src/components')
      }
    }
  },
}
