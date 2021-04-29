<template>
  <div id="detail-goods">
    <div class="top_no1">
      <div class="top">
        <div class="first">【{{ shop.name }}】{{ goods.title }}</div>
        <div class="price">
          <span class="newPrice">¥{{ goods.realPrice }}</span>
          <span class="oldPrice">{{ goods.oldPrice }}</span>
          <span class="activityPrice" v-if="goods.discount" >{{ goods.discount }}</span>
        </div>
        <div class="fansorsell">
          <span>{{ goods.columns[0] }}</span>
          <span>{{ goods.columns[1] }}</span>
          <span>{{ goods.columns[2] }}</span>
        </div>
        <div class="committedTo">
          <div v-for="(good, index) in goods.services" :key="index">
            <img :src="good.icon"  />
            <span>{{ good.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="logo">
        <img :src="shop.logo" alt="" />
        <span>{{ shop.name }}</span>
      </div>

      <div class="bo_2">
        <div class="salesAndCommodityQuantity">
          <div>
            <span>{{ shop.sells | adjustment }}万</span>
            <div>总销量</div>
          </div>
          <div>
            <span>{{ shop.goodsCount }}</span>
            <div>全部宝贝</div>
          </div>
        </div>

        <div class="productScore">
          <div v-for="(score,index) in shop.score" :key="index">
            <span>{{score.name}}</span>
            <span>{{score.score | jiaLing}} </span>
            <span>{{score.isBetter | hignorlow}}</span>
          </div> 
        </div>

      </div>
    </div>

    <div class="let-go"><a href="javascript:;">进店逛逛</a></div>
    <div class="desc">
      <span>{{goods.desc}}</span>
      <span v-for="(value,index) in detailImage" :key="index">
        <img :src="value" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailgoods",
  props: {
    goods: {
      type: Object,
    },
    shop: {
      type: Object,
    },
    detailImage:{
      type:Array
    }
  },
  data() {
    return {};
  },
  filters: {
    adjustment(count) {
      return (count / 10000).toFixed(1);
    },
    hignorlow(count){
      if(count) return '高'
      else return '低'
    },
    jiaLing(count){
      return count.toFixed(2)
    }
  },
  methods:{
   
  }
};
</script>
<style scoped>
.top {
  width: 95%;
  margin: 0px auto;
}
.top_no1 {
  border-bottom: 5px solid #f6f6f6;
}

/* 商品描述 */
.first {
  text-align: left;
  color: black;
  margin-top: 15px;
}
/* 价格 */
.price {
  margin-top: 13px;
}
.newPrice {
  font-size: 20px;
  color: red;
}
.oldPrice {
  font-size: 10px;
  margin-left: 8px;
  color: #bdbcbf;
  text-decoration: line-through;
}
.activityPrice {
  margin-left: 10px;
  background-color: #ff677b;
  color: white;
  font-size: 6px;
  width: 45px;
  height: 17px;
  text-align: center;
  line-height: 17px;
  display: inline-block;
  position: relative;
  border-radius: 25px;
  bottom: 7px;
}
/* 销量，收藏，发货。。。 */
.fansorsell {
  display: flex;
  font-size: 8px;
  margin-top: 15px;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 7px;
}
.fansorsell span {
  flex: 1;
}
.fansorsell span:nth-of-type(2) {
  text-align: center;
}
.fansorsell span:last-child {
  text-align: right;
}

/* 保证 */
.committedTo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0px;
  font-size: 14px;
  line-height: 34px;
  color: black;
}
.committedTo img {
  width: 14px;
}
.committedTo div {
  margin-left: 10px;
}

/* logo */
.logo {
  margin-top: 20px;
  margin-left: 10px;
}
.logo img {
  width: 50px;
  vertical-align: middle;
  margin-right: 10px;
}

.salesAndCommodityQuantity {
  width: 50%;
  display: flex;
  justify-content: space-around;
  color: black;
  text-align: center;
  border-right: 1px solid #EDEDED;
}
.salesAndCommodityQuantity > div >span{
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}
.salesAndCommodityQuantity > div > div {
  margin-top: 10px;
  font-size: 7px;
}
.bo_2{
  margin: 24px 0px;

  display: flex;
  height: 75px;
}
.productScore{

  width: 50%;
}
.productScore div{
  text-align: left;
  margin-bottom: 5px;
}
.productScore div span{
  margin-left: 20px;
}
.productScore div span:nth-of-type(1){
  color: black;
  font-size: 8px;

}
.productScore div span:nth-of-type(2){
  margin-left: 15px;
  color: red;
  font-size: 10px;

}
.productScore div span:nth-of-type(3){
  margin-left: 15px;
  color: red;
  font-size: 10px;

}
.let-go{
  border:1px solid;
  height: 30px;
  width: 50%;
  text-align: center;
  border-radius: 30px;
  line-height: 30px;
  margin: 0px auto;
}
.desc{
  margin-top: 20px;
  border-top: 1px solid #EDEDED;
}
.desc img{
  width: 100%;
}
</style>
