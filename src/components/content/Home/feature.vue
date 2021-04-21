<template>
 <div id="feature">
    <slot name="feaImg"></slot>
 </div>
</template>

<script>
export default {
  name:"feature",
  data () {
    return {
    }
  }
}

</script>
<style scoped>
#feature img{
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  border-top: 6px solid #EEEEEE;
}

</style>
