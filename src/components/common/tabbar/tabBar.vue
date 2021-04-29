<template>
  <div id="tab-bar" @click="openTheRoute">
    <div v-if="!(link == $route.path)">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img_ac"></slot>
    </div>
    <div :style="link == $route.path ? { color: 'red' } : {}">
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  props: ["link"],
  data() {
    return {};
  },
  methods: {
    openTheRoute() {
      if (!(this.link == this.$route.path)) {
        this.$router.push(this.link);
      }
    },
  },
  computed: {},
};
</script>
<style scoped>
#tab-bar {
  flex-grow: 1;
  text-align: center;
}
#tab-bar img {
  width: 25px;
  vertical-align: bottom;
  margin-top: 3px;
}
#tab-bar div {
  font-size: 14px;
}
</style>
