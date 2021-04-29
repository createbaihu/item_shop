<template >
 <div v-if="isShow" id="toast">{{message}}</div>
</template>

<script>
export default {
  name:"toast",
  data () {
    return {
      message:"",
      isShow:false
    }
  },
  methods:{
    show(message,duration=2000){
        this.message=message;
        this.isShow=true;
        setTimeout(()=>{
          this.message=""
          this.isShow=false;
        },duration)
    }
  }
}

</script>
<style scoped>
#toast{
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%,-50%);
  line-height: 35px;
  padding: 0px 10px;
}
</style>
