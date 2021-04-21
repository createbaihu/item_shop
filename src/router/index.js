import Vuerouter from 'vue-router'
import Vue from 'vue'
Vue.use(Vuerouter)

const Home = ()=>import('views/Home/Home')
const Cate = ()=>import('views/Cate/Cate')
const Profile = ()=>import('views/Profile/Profile')
const Shopcart = ()=>import('views/Shopcart/Shopcart')

export default new Vuerouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cate',
      component:Cate
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/shopcart',
      component:Shopcart
    }
  ]
})
