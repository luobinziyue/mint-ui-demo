<template>
    <div>
        <!-- 轮播图区域 这样用vue语法，注意src要绑定-->
        <swiper :swipe="list"></swiper>        

        <!-- 九宫格到六宫格的改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/newslist">
                    <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/imageslist">
                    <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/homo/productslist">
                    <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>            
        </ul>
    </div>
    
</template>
<script>
import swiper from "./swiper";
export default {
  //往自己组件内部挂载一些私有数据
  data() {
    return {
        list: [] //保存轮播图的数组
    };
  },
  components: {
    swiper
  },
  methods: {
    // getSwipe() {
    //   this.$http.get("api/getlunbo").then(result => {
    //     console.log(result);
    //     if (result.body.status == 0) {
    //       this.list = result.body.message;
    //     } else {
    //       console.log("获取资源失败");
    //     }
    //   });
    // }
    getSwipe() {
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
          console.log(result);
        if (result.body.status == 0) {
          this.list = result.body.message;
        } else {
          console.log("获取资源失败");
        }
      });
    }
  },
  created() {
    this.getSwipe();
  }
};
</script>
<style lang="less">

//九宫格/六宫格
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: none;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>

