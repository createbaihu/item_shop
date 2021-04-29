import Vuerouter from 'vue-router'
import Vue from 'vue'
Vue.use(Vuerouter)

const Home = ()=>import('views/Home/Home')
const Cate = ()=>import('views/Cate/Cate')
const Profile = ()=>import('views/Profile/Profile')
const Shopcart = ()=>import('views/Shopcart/Shopcart')
const Detail = ()=>import('views/Detail/detail.vue')

const router =new Vuerouter({
  routes:[
    {
      path:'/',
      redirect:'/home',
    },
    {
      path:'/home',
      component:Home,
      meta:{
        user:"阿西吧"
      }
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
    },
    {
      path:'/detail/:iid',
      component:Detail
    }
  ]
})

export default router

router.beforeEach((to,form,next)=>{
   next()
})
