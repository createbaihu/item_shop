<template>
  <div>
    <tab-bar-list>
      <tab-bar link="/home">
        <img src="~assets/img/tabbar/home.svg" slot="img" alt="" />
         <img src="~assets/img/tabbar/home_active.svg" slot="img_ac" alt="" />
        <div slot="desc">首页</div>
      </tab-bar>
      <tab-bar link="/cate">
        <img src="~assets/img/tabbar/category.svg" slot="img" alt="" />
        <img src="~assets/img/tabbar/category_active.svg" slot="img_ac" alt="" />
        <div slot="desc">分类</div>
      </tab-bar>
      <tab-bar link="/shopcart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="img" alt="" />
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="img_ac" alt="" />
        <div slot="desc">购物车</div>
      </tab-bar>
      <tab-bar link="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="img" alt="" />
        <img src="~assets/img/tabbar/profile_active.svg" slot="img_ac" alt="" />
        <div slot="desc">我的</div>
      </tab-bar>
    </tab-bar-list>
  </div>
</template>

<script>
import tabBar from "components/common/tabbar/tabBar.vue";
import tabBarList from "components/common/tabbar/tabBarList.vue";
export default {
  name: "tabbarMain",
  data() {
    return {};
  },
  components: {
    tabBar,
    tabBarList,
  },
};
</script>
<style scoped>
</style>
