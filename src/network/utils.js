let timer;
export function fangdou(hanshu, detail) {
  return function (...args) {
    clearTimeout(timer)
     timer = setTimeout(() => {
        hanshu.apply(this, args)
      }, detail)
  }
}

let timeout;
export function jiuliu(hanshu, detail) {
    return function(...args){
      if(timeout){return}
      if(!timeout){
        timeout=setTimeout(()=>{
          timeout=null
          hanshu(this,args)
        },detail)
      }
    }
}


