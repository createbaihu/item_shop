<template>
  <div id="shop-cart">
    <nav-bar col="#ff8198" wid="38px">
      <div slot="center" class="cart">购物车({{ getSize }})</div>
    </nav-bar>

    <shop-detail></shop-detail>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";
import ShopDetail from "./children/ShopDetail.vue";

import { mapGetters } from "vuex";
export default {
  name: "Shopcart",
  data() {
    return {};
  },
  components: {
    navBar,
    ShopDetail,
  },
  computed: {
    ...mapGetters(["getSize", "getCart"]),
  },
};
</script>
<style scoped>
.cart {
  font-weight: bold;
  color: white;
}
</style>
