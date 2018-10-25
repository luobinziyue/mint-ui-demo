<template>
    <div id="goodsInfo">

        <div class="mui-card">
            <!-- 引入轮播图组件    -->
            <swiper :swipe="imgInfo"></swiper>

        </div>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header" >{{contentInfo.title}}</div>
            <!--内容区-->
            <div class="mui-card-content">
                <p class="sell">
                    <span>市场价：<del>&nbsp;{{contentInfo.market_price}}</del>&nbsp;&nbsp;销售价：</span>
                    <span class="now">{{contentInfo.sell_price}}</span>
                </p>
                <div class="number">
                    <span>
                        购买数量 :
                        <number style="display:inline-block"></number>
                    </span>                
                </div>
                <div class="pay">
                    <mt-button type="primary" size="normal" >立即购买</mt-button>
                    <mt-button type="danger" size="normal" >加入购物车</mt-button>
                </div>
            </div>
            
        </div>

        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">
                <h3>商品参数</h3>
            </div>
            <!--内容区-->
            <div class="mui-card-content">
                <div>
                    <p>商品货号：{{contentInfo.goods_no}}</p>
                    <p>库存情况：{{contentInfo.stock_quantity}}件</p>
                    <p>上架时间：{{contentInfo.add_time |dateFormat('YYYY-MM-DD hh:mm:ss')}}</p>
                </div>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goIntroduce(contentInfo.id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评价</mt-button>                
            </div>
        </div>
        
    </div>
</template>
<script>
//引入轮播组件
import swiper from "../tabbar/swiper";
//引入数字输入框组件
import number from "./numberBox";

export default {
  data() {
    return {
      id: this.$route.params.id,
      imgInfo: [],
      contentInfo: []
    };
  },
  components: {
    swiper,
    number
  },
  methods: {
    //获取商品信息
    getInfos() {
      this.$http.get("api/goods/getinfo/" + this.id).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          this.contentInfo = res.body.message[0];
        }
      });
    },    
    //获取轮播图片
    getImgInfos() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          res.body.message.forEach(item => {
            item.img = item.src;
          });
          this.imgInfo = res.body.message;
        }
      });
    },
    //跳转图文介绍页面
    goIntroduce(id) {
        this.$router.push({name:'introduce',params:{id}})
    }
  },
  created() {
    this.getInfos();
    this.getImgInfos();
  }
};
</script>
<style　lang="less" scoped>
#goodsInfo {
  background-color: #ddd;
  padding-top: 10px;
  .mui-card {
    margin-top: 0;    
    .mui-card-content {
        padding:25px;
      .sell {
          font-size: 16px;
        .now {
          color: red;
          font-weight: 600;
          font-size: 20px;
        }
      }
      .number{
          margin: 15px 0;
      }
      .pay {
        margin-top: 10px;
      }
    }

    .mui-card-footer {
        display: block;
        .mint-button {
            margin: 15px 0;
        }

    }
  }
}
</style>
