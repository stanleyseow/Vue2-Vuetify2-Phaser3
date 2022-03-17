
module.exports = {
  configureWebpack:{
    devServer: {
      hot: false,
      liveReload: false,
    watchOptions:{
      poll: false,
      ignored: /node_modules/
    }
  }
}
}