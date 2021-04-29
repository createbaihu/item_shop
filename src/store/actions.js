import {ADD_COUNTER,ADD_TOCART} from './mutation-type'
export default {
  addCart({ state, commit }, payload) {
    const cart = state.cartList.find(cart => {
      return cart.iid == payload.iid
    })
    if (cart) {
      commit(ADD_COUNTER, cart)
      return new Promise((resolve,reject)=>{
        resolve("当前商品数量+1")
      })
    } else {
      payload.count = 1;
      commit(ADD_TOCART, payload)
      return new Promise((resolve,reject)=>{
        resolve("商品添加成功")
      })
    }


  }
}