export default {
  getSize(state,getters){
    return state.cartList.length
  },
  getCart(state,getters){
    return state.cartList
  }
}