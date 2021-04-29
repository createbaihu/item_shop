import {ADD_COUNTER,ADD_TOCART} from './mutation-type'
export default {
  [ADD_TOCART](state, payload) {
    state.cartList.push(payload)
  },
  [ADD_COUNTER](state, payload) {
    payload.count++;
  }
}