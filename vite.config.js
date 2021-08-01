const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main_fr: resolve(__dirname, 'index-fr.html')
      }
    }
  }
}