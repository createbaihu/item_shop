<template>
  <div id="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
};
</script>
<style scoped>
#nav-bar{
  position: fixed;
  top: 0px;
  width: 100%;
  height: 44px;
  display: flex;
  background-color: var(--color-tint);
  text-align: center;
  line-height: 44px;
  z-index: 9;
  
}
.left,.right{
  width: 6px;
}
.center{
  flex-grow: 1;
}



</style>
