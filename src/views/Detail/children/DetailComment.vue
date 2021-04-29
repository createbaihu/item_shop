<template>
 <div id="detail-comment">
   <div v-for="(com,index) in comment" :key="index" class="box">
     <div class="user">
       <img :src="com.user.avatar" alt="">
       <span>{{com.user.uname}}</span>
     </div>

     <div class="content">{{com.content}}</div>

     <div class="content-desc">
       <span>{{com.created | getDate}}</span>
       <span>{{com.style}}</span>
     </div>
     <div v-if="com.explain" class="huifu">
       <span>{{com.explain}}</span>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name:"detailComment",
  data () {
    return {
    }
  },
  props:['comment'],
  filters:{
    getDate(event){
    const date =  new Date(event*1000)
    return date.getFullYear()+"-"+ date.getMonth()+"-"
    +date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

    
    }
  }
}

</script>
<style scoped>
.box{
  width: 95%;
  margin: 0px auto;
  padding-bottom: 20px;
  border-bottom: 3px solid #F4F4F4;
}
.user img{
  width: 30px;
  vertical-align: bottom;
}
.user span{
  display: inline-block;
  line-height: 30px;
  margin-left: 10px;
  font-size: 12px;
  color: black;
}
.user{
  margin-top: 10px;
}
.content{
  margin-top: 10px;
  font-size: 14px;
}
.content-desc{
  font-size: 1px;
  color: rgb(156, 156, 153);
}
.content-desc span{
  display: inline-block;
  margin-top: 10px;
  margin-left: 5px;
}
.huifu{
  font-size: 7px;
  color: red;
  margin-top: 15px;
}
</style>
