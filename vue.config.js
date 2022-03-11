
module.exports = {
  configureWebpack:{
    devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },

    watchOptions:{
      poll: false,
      ignored: /node_modules/
    }


  }
  }

}