<template>
  <div class="wrapper" ref="wrap">
    <slot name="content">
    </slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: ["letGoTop","probeType","pullUpLoad"],
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
     //上拉更新数据
    pullingUpAction() {
      this.$emit("updateNext", true);
      this.scroll.finishPullUp();
      this.scroll.refresh(); //当滚动区域的dom结构有变化时，需要执行这个操作
    },
     //上拉到一定深度显示上拉按钮
    requestToUpdateData(position) {
      let trigger = Math.abs(position.y);
     //console.log(trigger)
      this.$emit("trigger", trigger)     
    },
    // fangdou(hanshu,detail){
    //   let timer=null
    //   return function(...args){
    //    if(timer) { clearTimeout(timer)}
    //    timer =setTimeout(()=>{
    //      // console.log(this)
    //       hanshu.apply(this,args)
    //     },detail)
    //   }
    // }
  },
  watch: {
    letGoTop() {
      //回到上面
      if (this.letGoTop) {
        this.scroll.scrollTo(0,0, 1000);
        this.$emit("changeletGoTop", !this.letGoTop);
      }
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      pullDownRefresh:{
        threshold:50,//触发pullingDown事件的位置
        stop:-50//下拉回弹后停留的位置
      },
      click: true,
      tap: true,
      useTransition:false
      // bounce: false
    });
    console.log(this.scroll)
    //上拉更新数据
    this.scroll.on("pullingUp", this.pullingUpAction);

    //上拉到一定深度显示回到顶部按钮
    this.scroll.on("scroll",this.requestToUpdateData);

    this.scroll.on("pullingDown",()=>{
       this.$emit("updateDate",true)
       this.scroll.finishPullDown();
       this.scroll.refresh();

    })
  },
};
</script>
<style scoped>
</style>
