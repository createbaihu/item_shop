<template>
  <div id="detail-bottom-bar">
    <div class="left">
      <div>
        <span class="iconfont icon-kefu"></span>
        <p>客服</p>
      </div>
      <div>
        <span class="iconfont icon-dianpu"></span>
        <p>店铺</p>
      </div>
      <div>
        <span class="iconfont icon-shoucang"></span>
        <p>店铺</p>
      </div>
    </div>
    <div class="center" @click="addToShoppingCart">加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods:{
    addToShoppingCart(){
      this.$emit("addToShoppingCart",true)
    }
  }
};
</script>
<style scoped>
#detail-bottom-bar {
  width: 100%;
  height: 49px;
  bottom: 0px;
  z-index: 1;
  background-color: white;
  position: fixed;
  display: flex;
  text-align: center;
  color: black;
}
.left{
  width: 50%;
  height: 100%;
  display: flex;

}
.left div{
  flex: 1 1 auto;
}
.left span{
  font-size: 20px;
  display: inline-block;
  margin-top: 7px
}
.left p{
  margin-top: 2px;
  font-size: 6px;
}
.center{
  width: 30%;
  line-height:49px ;
  background-color: #d9e711;
}
.right{
  line-height: 49px;
  flex: 1;
  background-color: #C792B3;
}
</style>
