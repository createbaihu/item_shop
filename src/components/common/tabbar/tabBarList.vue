<template>
  <div id="tab-bar-list">
    <slot ></slot>
  </div>
</template>

<script>
export default {
  name: "tarBarList",
  data() {
    return {};
  },
};
</script>
<style scoped>
#tab-bar-list {
  display: flex;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0px;
  background: #F6F6F6;
}
</style>
