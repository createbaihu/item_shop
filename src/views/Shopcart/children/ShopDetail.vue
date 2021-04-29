<template>
  <div id="shop-detail" class="test">
    <scroll probeType="3" pullUpLoad="true" class="scro">
      <div class="content" slot="content">
        <ul class="product-list">
          <li v-for="(product, index) in cart" :key="index" class="product-li" >
            <input
              type="checkbox"
              :value="product.iid"
              v-model="checkCartId"
              class="check"
              @change="ck"
            />
            <img :src="product.image" alt="" />
            <div class="product-content">
              <p class="title">{{ product.title }}</p>
              <p class="desc">{{ product.desc }}</p>
              <div>
                <span>¥{{ product.price }}</span>
                <span>x{{ product.count }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
    <div class="total">
      <span><input type="checkbox" v-model="whetherYouChoose" @change="ch" />全选</span>
      <span>合计: ¥{{getTotal}}</span>
      <span>去计算({{this.$store.getters.getSize}})</span>
    </div>
  </div>
</template>

<script>
import scroll from "components/common/scroll/scroll.vue";
export default {
  components: { scroll },
  data() {
    return {
      cart: [],
      checkCartId: [],
      whetherYouChoose: false,
      cartDemo: [
        {
          image:
            "//s5.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg",
          title: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮",
          desc: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮",
          price: "109.00",
          iid: "1m7rp9w",
          count: 1,
        },
      ],
      total: this.getTotal,
    };
  },
  created() {
    this.cart = this.$store.getters.getCart;
  },
  methods: {
    ck(){
     if(this.checkCartId.length==this.cart.length){
       this.whetherYouChoose=true
     }else{
       this.whetherYouChoose=false
     }
    },
    ch(){
       if(this.whetherYouChoose){
         this.checkCartId = [];
         this.cart.forEach(e=>{
           this.checkCartId.push(e.iid);
         })
       }else{
          this.checkCartId = [];
       }
    }
  },
  watch: {
    whetherYouChoose() {
      // if (!this.whetherYouChoose) {
      //   this.checkCartId = [];
      // } else {
      //   this.checkCartId = [];
      //   this.cart.forEach((e) => {
      //     this.checkCartId.push(e.iid);
      //   });
      // }
    },
    
  },
  computed:{
    getTotal(){
      let total=0;
      this.cart.forEach(e=>{
        if(this.checkCartId.indexOf(e.iid)!=-1){
            total+= (e.price*e.count)
        }       
      })
      return total.toFixed(2)
    }
  }
};
</script>
<style scoped>
#shop-detail {
  width: 100%;
  
}
.check {
  margin: 0px 3px;
  position: relative;
  top: 35px;
}
.product-list img {
  width: 20%;
  height: 82px;
  border-radius: 5px;
}
.product-li {
  display: flex;
  padding: 7px 0px;
  border-bottom: 1px solid #d2d2d2;
}
.product-li > div {
  width: 70%;
  margin-left: 10px;
}
.product-li > div p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  height: 20px;
}
.title {
  color: black;
}
.desc {
  margin-top: 10px;
  font-size: 7px;
}
.product-content div {
  margin-top: 16px;
}
.product-content div span:nth-of-type(2) {
  float: right;
  color: black;
}
.product-content div span:nth-of-type(1) {
  color: red;
  font-size: 16px;
}
.total {
  background: #ececec;
  position: fixed;
  bottom: 49px;
  height: 30px;
  width: 100%;
  line-height: 30px;
  display: flex;
  font-size: 12px;
}
.total input {
  position: relative;
  top: 2px;
  margin-right: 2px;
}
.total span {
  display: inline-block;
}
.total span:nth-of-type(1) {
  width: 20%;
  text-align: center;
}
.total span:nth-of-type(2) {
  width: 55%;
}
.total span:nth-of-type(3) {
  width: 25%;
  text-align: center;
  background: #fd5100;
  color: white;
}
.scro {
  height: 80vh;
  overflow: hidden;
  margin-top: 37px;
}


</style>
