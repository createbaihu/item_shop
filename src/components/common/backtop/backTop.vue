<template>
 <div id="back-top" >
   <img src="~assets/img/back-top.png" alt="">
 </div>
</template>

<script>
export default {
  name:"backTop",
  data () {
    return {
    }
  },
  methods:{
    
  }
}

</script>
<style scoped>
#back-top{
  position: fixed;
  bottom: 60px;
  z-index: 100;
  right: 10px;
  zoom: 0.8;
}
</style>
