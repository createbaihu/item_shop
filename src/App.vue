<template>
  <div id="app">
      <router-view></router-view>
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
@import "assets/css/base.css"
</style>
