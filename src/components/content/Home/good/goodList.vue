<template>
 <div id="good-list">
   <good-list-item v-for="(good,index) in goodsList" :key="index" :good="good">
   </good-list-item>
 </div>
</template>

<script>
import goodListItem from './goodListItem.vue'
export default {
  components: { goodListItem },
  name:"goodList",
  props:{
    goodsList:{
      type:Array
    }
  },
  data () {
    return {
    }
  }

}

</script>
<style scoped>
#good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  font-size: 12px;

}
</style>
