<template>
  <div id="recommends-main">
    <div v-for="(value, key) in recommends" :key="key">
        <a :href="value.link">
          <img :src="value.image" alt="" @load="imageLoading" />
          <p class="title">{{ value.title }}</p>
          <p class="p2">
            <span class="price">{{value.discountPrice}}</span>
            <span class="cf">收藏：{{value.cfav}}</span>
          </p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  data() {
    return {
      myrecommends: this.recommends,
    };
  },
  props: ["recommends"],
  methods:{
    imageLoading(){
      this.$emit("imageLoading",true)
    }
  }
};
</script>
<style scoped>
#recommends-main{
 width: 95%;
 display: flex;
 flex-wrap: wrap;
 margin: 0px auto;
 font-size: 8px;
 justify-content: space-around;
}
#recommends-main div{
  width: 46%;
  margin-bottom: 6px;
}
#recommends-main img{
  width: 100%;
}
.title{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:pre;
}
.p2{
  text-align: center;
}
.price{
  color: red;
  margin-right: 5px;
}
</style>
