<template>
  <div id="good-list-item" @click="jumpDetail">  
      <img v-lazy="good.show.img" alt="" />
      <div class="des">
        <p class="title">{{ good.title }}</p>
        <span class="price">{{ good.price }}</span>
        <span class="cfav">☆{{ good.cfav }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: ["good"],
  data() {
    return {};
  },
  methods:{
    jumpDetail(){
      this.$router.push("/detail/"+this.good.iid)
    }
  }
};
</script>
<style scoped>
#good-list-item {
  width: 47%;
  margin-bottom: 5px;
}
#good-list-item img {
  width: 100%;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}
.price {
  color: var(--color-high-text);
}
</style>
