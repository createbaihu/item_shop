import request from 'network/index.js'

export function homemultidata(){
     return request({
       url:"/home/multidata"
     })
}

export function homeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}