<template>
  <div id="app">
    <keep-alive exclude="detail,Shopcart">
      <router-view></router-view>
    </keep-alive>
      
      <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import tabBarMain from 'components/content/tabBarMain'

export default {
  name: 'app',
  components: {
   tabBarMain
  }
}
</script>

<style>
/* #app{
  background-color: #EEEEEE;
} */
@import "assets/css/base.css";
@import  "assets/icon/iconfont.css"
</style>
