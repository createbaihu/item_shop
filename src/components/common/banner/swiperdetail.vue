<template>
  <div id="swiper-home">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide
        class="swiper_list"
        v-for="(value, key) in banners"
        :key="key"
      >
        <img :src="value" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "swiperdetail",
  props: ["banners"],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
        isLoad: false,
        disableOnInteraction: false,
        autoplay: {
          disableOnInteraction: false,
        },
      },
    };
  },
  methods: {
    imgOnload() {
      if (!this.isLoad) {
        this.$emit("imgloadGood");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
#swiper-home {
}
.swiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.swiper_list img {
  width: 100%;
  vertical-align: bottom;
}

.swiper-container {
  --swiper-theme-color: #e7dbce;
}
</style>