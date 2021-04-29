<template>
 <div>我是bb{{title}}
   <button @click="clean">清除</button>
 </div>
</template>

<script>
import bus from "network/utils";
export default {
  name:"bb",
  data () {
    return {
      title:""
    }
  },
  mounted(){
    this.$bus.$on("bvc",e=>{
      this.title=e;
      console.log(this.title)
    })
  },
  beforeDestroy(){
    this.$bus.$off("bvc",e=>{
      console.log(e)
    })
  },
  methods:{
    clean(){
      this.$bus.$off("bvc");  
    }
  }
}

</script>
<style scoped>
</style>
