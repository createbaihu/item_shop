<template>
  <div>
    <nav-bar-main></nav-bar-main>

    <tabControl :titles="tabControlList" @choose="choose($event)" :style="!tabControlFixed?{display:'none'}:{}" 
        ref="tabControl">
        </tabControl>

    <!-- 传入一个图片,链接集合即可实现轮播 -->
    <scroll class="scro" probeType="3" pullUpLoad="true" @trigger="trigger($event)" :letGoTop="letGoTop" 
    @changeletGoTop="changeletGoTop($event)" @updateNext="updateNext($event)"
    @updateDate="updateDate($event)"
    >
       

      <div slot="content" ref="content" class="content">
        <swiperhome
          :banners="bannersMessage"
          v-if="bannersMessage.length"
          @imgloadGood="imgloadGood"
        ></swiperhome>
        <recommends-main
          :recommends="recommends"
          v-if="recommends.length"
        ></recommends-main>
        <feature>
          <img slot="feaImg" src="~assets/img/home/recommend_bg.jpg" />
        </feature>
        <tabControl :titles="tabControlList" @choose="choose($event)" :style="tabControlFixed?{display:'none'}:{}"
        ref="tabControl">
        </tabControl>

        <!-- goodList  :style="tabControlFixed?{'position':'fixed'}:{}"-->
        <good-list :goodsList="chooseGood" class="goodsList" ref="goodsList"></good-list>
      </div>
    </scroll>

    <back-top :style="showBackTop?{display:'block'}:{display:'none'}" @click.native="call" ></back-top>

    <!-- <div class="placeholder"></div>  @callBack="call($event)"-->
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
import scroll from "components/common/scroll/scroll.vue";
import backTop from "components/common/backtop/backTop.vue";

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
      showBackTop:false,
      letGoTop:false,
      tabOffsetTop:0,
      tabControlFixed:false
    };
  },
  components: {
    navBarMain,
    swiperhome,
    RecommendsMain,
    feature,
    tabControl,
    goodList,
    scroll,
    backTop,
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
    //获取banners recommend 的数组
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
    //填充goods数组
    getHomeGoods(type) {
      const pages = this.goods[type].page + 1;
      homeGoods(type, pages).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    //点击了[流行，新款，精选] 中的哪个
    choose(event) {
      this.goodIndex = parseInt(event);
    },
    //下拉超过2000px，则显示上拉按钮
    trigger(event) {
      //console.log(event)
      event=parseInt(event)
      if(event>1500){
          this.showBackTop=true
      }else{
          this.showBackTop=false
      }
      if(event>=(this.tabOffsetTop+44)){
        this.tabControlFixed=true;
      }else{
        this.tabControlFixed=false;
      }
      
    },
    //点击返回最上面
    call(event){
      this.letGoTop=true
    },
    //执行了返回命令后,改变letGoTop=false
    changeletGoTop(event){
      this.letGoTop=event
    },
    //更新下一页
    updateNext(event){
      console.log(this.goodtIndexList[this.goodIndex])
     this.getHomeGoods(this.goodtIndexList[this.goodIndex])
     console.log(this.$refs.content.clientHeight)
    },
    //下拉重置
    updateDate(event){
      document.location.reload();
    },
    imgloadGood(){
      setTimeout(()=>{
        this.tabOffsetTop= this.$refs.tabControl.$el.offsetTop
      },50)
      
    }
  },
  computed: {
    //切换时返回新good
    chooseGood() {
      return this.goods[this.goodtIndexList[this.goodIndex]].list;
    },
  },
  mounted() {
    // setTimeout(()=>{
    //   console.log(this.$refs.tabControl.$el.offsetTop)
    // },300)
  },
};
</script>
<style scoped>
.placeholder {
  height: 300px;
  border: 1px solid;
}
.scro {
  height: 91vh;
  overflow: hidden;
  margin-top: 44px;
}
.tabc{
  visibility: hidden;
}

</style>
