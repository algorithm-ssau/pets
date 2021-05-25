const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    proxy: {
      '/API': {
        target: 'http://localhost:5000'
      }
    }
  }
}