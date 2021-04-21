<template>
  <div id="recommends-main">
    <div v-for="(value, key) in myrecommends" :key="key">
        <a :href="value.link">
          <img :src="value.image" alt="" />
          <p>{{ value.title }}</p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendsMain",
  data() {
    return {
      myrecommends: this.recommends,
    };
  },
  props: ["recommends"],
};
</script>
<style scoped>
#recommends-main{
  display: flex;
  text-align: center;
  font-size: 8px;
  padding-bottom: 20px;
  background-color: white;
}
#recommends-main div{
  padding-top: 10px;
  flex: 1;
}
#recommends-main img{
  width: 60px;
  padding-bottom: 4px;
}
</style>
