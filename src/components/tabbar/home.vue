<template>
    <div>
        <!-- 轮播图区域 这样用vue语法，注意src要绑定-->
        <mt-swipe :auto="3000" scoped>
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <img v-bind:src="item.img" alt="">
            </mt-swipe-item>
           
        </mt-swipe>

        <!-- 九宫格到六宫格的改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
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
export default {
  data() {
    return {
      list: [] //保存轮播图的数组
    };
  },
  methods: {
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
// 轮播图
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:first-of-type {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: skyblue;
    }
    &:last-of-type {
      background-color: lightblue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

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

