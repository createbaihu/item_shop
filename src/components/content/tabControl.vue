<template>
  <div id="tab-control">
    <div v-for="(value, index) in titles" 
    :key="index" :class="{active:index==activeIndex}"
    @click="changeactiveIndex(index)">
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeIndex:0
    };
  },
  methods:{
    changeactiveIndex(index){
      this.activeIndex=index
    }
  },
  watch:{
    activeIndex(){
      this.$emit("choose",this.activeIndex)
    }
  }
};
</script>
<style scoped>
#tab-control {
   display: flex;
   text-align: center;
   padding-top: 4px;
   position:sticky;
   top: 43px;
   z-index: 9;
   background-color: white;
}
#tab-control div {
  flex: 1;
  padding-top: 4px;
  padding-bottom: 4px;
}
#tab-control div span {
  padding: 0px 5px;
  padding-bottom: 4px;
  
}
.active span{
  border-bottom: 4px solid var(--color-high-text);
}
</style>
