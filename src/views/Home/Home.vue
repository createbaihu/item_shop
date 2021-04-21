<template>
  <div>
    <nav-bar-main></nav-bar-main>
    <!-- 传入一个图片,链接集合即可实现轮播 -->
    <swiperhome
      :banners="bannersMessage"
      v-if="bannersMessage.length"
    ></swiperhome>
    <recommends-main
      :recommends="recommends"
      v-if="recommends.length"
    ></recommends-main>
    <feature>
      <img slot="feaImg" src="~assets/img/home/recommend_bg.jpg" />
    </feature>
    <tabControl :titles="tabControlList" @choose="choose($event)"> </tabControl>

    <!-- goodList -->
    <good-list :goodsList="chooseGood"></good-list>

    <div class="placeholder"></div>
  </div>
</template>

<script>
import navBarMain from "components/content/navBarMain.vue";
import { homemultidata, homeGoods } from "network/home";
import swiperhome from "components/common/banner/swiperhome";
import RecommendsMain from "components/content/Home/recommendsMain.vue";
import feature from "components/content/Home/feature.vue";
import tabControl from "components/content/tabControl.vue";
import goodList from "components/content/Home/good/goodList.vue";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      bannersMessage: [],
      recommends: [],
      tabControlList: ["流行", "新款", "精选"],
      goodtIndexList: ["pop", "new", "sell"],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      goodIndex: 0,
    };
  },
  components: {
    navBarMain,
    swiperhome,
    RecommendsMain,
    feature,
    tabControl,
    goodList,
    chooseGood: "pop",
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    // 在此处执行你要执行的函数

    this.goodtIndexList.forEach((good) => {
      this.getHomeGoods(good);
    });
  },
  methods: {
    getHomeMultidata() {
      homemultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        this.bannersMessage = this.banners.map((a) => {
          return {
            image: a.image,
            link: a.link,
          };
        });
      });
    },
    getHomeGoods(type) {
      const pages = this.goods[type].page + 1;
      homeGoods(type, pages).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    choose(event) {
      this.goodIndex = parseInt(event);
    },
  },
  computed: {
    chooseGood() {
      return this.goods[this.goodtIndexList[this.goodIndex]].list;
    },
  },
};
</script>
<style scoped>
.placeholder {
  height: 300px;
}
</style>
