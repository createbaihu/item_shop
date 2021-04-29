<template>
  <div class="cate">
    <nav-bar col="#ff8198" wid="44px">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";

export default {
  components: { navBar },
  name: "Cate",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.wrapper {
  height: 400px;
  background-color: wheat;
  overflow-y: hidden;
}
</style>
