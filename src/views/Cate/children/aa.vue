<template>
 <div>我是aa
   <button @click="cht">冲啊</button>
 </div>
</template>

<script>
import bus from "network/utils";
export default {
  name:"aa",
  data () {
    return {
    }
  },
  methods:{
    cht(){
        this.$bus.$emit("bvc","啊我死了")
    }
  },
  mounted() {
    this.$bus.$emit("bvc","啊我死了")
  },
}

</script>
<style scoped>
</style>
