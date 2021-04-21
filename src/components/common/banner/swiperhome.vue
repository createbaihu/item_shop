<template>
  <div id="swiper-home">
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper" >
    <swiper-slide class="swiper_list"  v-for="(value, key) in bannersList" :key="key">
      <a :href="value.link">
      <img :src="value.image" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>

</template>

<script>
  export default {
    name: 'swiperhome',
    props:['banners'],
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          }, 
          loop : true, 
          autoplay:true
        },
        bannersList:this.banners
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      },
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
  }
</script>

<style scoped>
#swiper-home{
  margin-top: 44px;
}
 .swiper{
   width: 100%;
   /* height: 230px; */
 }
.swiper_list img{
   width: 100%;
   vertical-align: bottom;
}
.swiper-container{
    --swiper-theme-color: #e7dbce;
  }
</style>