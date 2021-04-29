<template>
  <div id="nav-bar" :style="{backgroundColor:col,lineHeight:wid }"  >
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
  props:['col','wid'],
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

  display: flex;
  /* background-color: var(--color-tint); */
  text-align: center;
  z-index: 9;
  
}
.left,.right{
  width: 60px;
}
.center{
  flex-grow: 1;
}



</style>
