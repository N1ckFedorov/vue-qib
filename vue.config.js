module.exports = {
  
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-qib/' : '/',

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  },
  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
