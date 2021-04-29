import Vue from 'vue'
import App from './App.vue'
import store from 'store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

import Toast from 'components/common/toast'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
import Vuerouter from 'router'

var VueEvent= new Vue();
Vue.prototype.$bus=VueEvent

Vue.use(Toast)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

let vv=new Vue({
  render: h => h(App),
  router:Vuerouter,
  store
}).$mount('#app')

