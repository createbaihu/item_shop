<template>
  <div id="detail" >
    <!-- 导航 -->
    <nav-bar col="while" wid="44px">
      <div slot="left" class="left" @click="back">&lt;</div>
      <div slot="center" class="center" v-if="moduleCoordinate.length == 4">
        <div
          v-for="(title, index) in titles"
          :key="index"
          :class="{ active: index == currentActive }"
          @click="jumpCoordinates(index)"
        >
          {{ title }}
          <!--把index看成div是属性 点击时 currentActive = index 而这样则会变红 -->
        </div>
      </div>
    </nav-bar>

    <scroll
      class="scro"
      pullUpLoad="true"
      probeType="3"
      @trigger="ff(trigger, 10)($event)"
      :letGoTop="goTop"
      @changeletGoTop="changeletGoTop"
      ref="scr"
    >
      <div slot="content" class="content">
        <!-- 轮播 -->
        <swiperdetail :banners="topImages" class="top"></swiperdetail>
        <!-- goods -->
        <detailgoods
          :goods="goods"
          :shop="shop"
          v-if="goods != null"
          :detailImage="detailImage"
        ></detailgoods>

        <!-- 参数 -->
        <detailParams :paramInfo="paramInfo" ref="args"></detailParams>

        <!-- 评论 -->
        <detail-comment :comment="comment" ref="comment"></detail-comment>

        <!-- 推荐 -->
        <detail-recommend
          :recommends="recommend"
          ref="recommend"
          @imageLoading="imageLoading($event)"
        ></detail-recommend>
      </div>
    </scroll>

    <back-top
      :style="!isShowTop ? { display: 'none' } : {}"
      @click.native="pullTop"
    ></back-top>

    <detail-bottom-bar @addToShoppingCart="addToShoppingCart"></detail-bottom-bar>

    <!-- <toast ref="to"></toast> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navBar.vue";
import { getDetail, Shop, Goods, GoodsParam, getRecommend } from "network/detail";
import swiperdetail from "components/common/banner/swiperdetail.vue";
import detailgoods from "./children/detailgoods.vue";
import scroll from "components/common/scroll/scroll.vue";
import detailParams from "./children/DetailParams.vue";
import DetailComment from "./children/DetailComment.vue";
import DetailRecommend from "./children/DetailRecommend.vue";
import BackTop from "components/common/backtop/backTop.vue";

import { fangdou, jiuliu } from "network/utils.js";
import DetailBottomBar from "./children/DetailBottomBar.vue";
import Toast from '../../components/common/toast/toast.vue';
export default {
  components: {
    NavBar,
    swiperdetail,
    detailgoods,
    scroll,
    detailParams,
    DetailComment,
    DetailRecommend,
    BackTop,
    DetailBottomBar,
    Toast,
  },
  name: "detail",
  DetailRecommend,
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentActive: 0,
      topImages: [],
      goods: null,
      shop: {},
      detailImage: [],
      paramInfo: {},
      comment: [],
      recommend: [],
      isShowTop: false,
      goTop: false,
      moduleCoordinate: [],
      iid:'001'
    };
  },
  created() {
    let iid = this.$route.params.iid;
    this.iid=iid
    getDetail(iid).then((res) => {
      const data = res.data.result;
      //轮播
      this.topImages = data.itemInfo.topImages;
      //商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //店铺信息
      this.shop = new Shop(data.shopInfo);

      this.detailImage = data.detailInfo.detailImage[0].list;

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      this.comment = data.rate.list;

      getRecommend().then((res) => {
        this.recommend = res.data.data.list;
      });
    });
  },
  methods: {
    // 返回上一个url
    back() {
      this.$router.back();
    },
    trigger(event) {
      if (event > 1800) {
        this.isShowTop = true;
      } else {
        this.isShowTop = false;
      }

      //根据各个模块的坐标确定currentActive =？从而确定谁红
      if (event > 0 && event < this.moduleCoordinate[1]) {
        this.currentActive = 0;
      } else if (event >= this.moduleCoordinate[1] && event < this.moduleCoordinate[2]) {
        this.currentActive = 1;
      } else if (event >= this.moduleCoordinate[2] && event < this.moduleCoordinate[3]) {
        this.currentActive = 2;
      } else {
        this.currentActive = 3;
      }
    },
    pullTop() {
      this.goTop = true;
    },
    changeletGoTop(event) {
      this.goTop = event;
    },
    ff(hanshu, detail) {
      return fangdou(hanshu, detail);
    },
    // 图片加载完 获取坐标
    imageLoading(event) {
      fangdou(() => {
        this.moduleCoordinate = [
          0,
          this.$refs.args.$el.offsetTop,
          this.$refs.comment.$el.offsetTop,
          this.$refs.recommend.$el.offsetTop,
        ];
      }, 10)();
    },
    //根据模块跳转坐标
    jumpCoordinates(index) {
      console.log(index);
      this.$refs.scr.scroll.scrollTo(0, -this.moduleCoordinate[index], 500);
      this.currentActive = index;
    },
    //加入购物车
    addToShoppingCart() {
      // console.log("加入购物车")
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        iid: this.iid,
      };
      this.$store.dispatch("addCart",product).then(res=>{
        //console.log(res)
        this.$toast.show(res)
      })
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
}
.center div {
  flex: 1;
  font-size: 14px;
}
.left {
  font-size: 30px;
  font-weight: bold;
}
.active {
  color: red;
}
.scro {
  height: 85vh;
  overflow: hidden;
  margin-top: 44px;
}
/* .content{
  height: 22000px;
} */
</style>
