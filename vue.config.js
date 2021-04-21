module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'router':'@/router',
        'store':'@/store',
        'views':'@/views'
      }
    }
  }
}

// let path =require('path')
// function resolve(src){
//     return path.join(__dirname,src)
// }
// console.log(path.join(__dirname+"/src"))

