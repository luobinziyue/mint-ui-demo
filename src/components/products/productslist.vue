<template>
    <div id="goods">

      <mt-loadmore :top-method="loadTop" 
      :bottom-method="loadBottom" :autoFill='false'  
      ref="loadmore">
        <div class="goodList">
          <div class="list" v-for="item in goodsList" :key="item.id" @click="getInfo(item.id)">
            <div href="#" class="description" >
                <img  :src="item.img_url">
                <h3 >{{item.title}}</h3 >
            </div>
            <div class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </div>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
        </div>
        </div>
  
      </mt-loadmore>   
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      pagesize: 1,
      goodsList: [],
      allLoaded: false
    };
  },
  methods: {
    getgoods() {
      this.$http.get("api/getgoods?pageindex=" + this.pagesize).then(res => {
        console.log(res);
        console.log(this.$refs);
        if (res.body.status == 0) {
          //当页面处于第一页的时候，重置下拉刷新功能，保证最新数据
          //当页面不是第一页时重置上拉加载功能，进行数据加载
          if (this.pagesize == 1) {
            this.$refs.loadmore.onTopLoaded();
            //重置下拉刷新功能
            this.goodsList = res.body.message;
          } else {
            if (res.body.message.length == 0) {
              this.allLoaded = true; //若数据已经获取完毕
              return;
            }
            this.$refs.loadmore.onBottomLoaded();
            this.goodsList = this.goodsList.concat(res.body.message);
          }
        } else {
          Toast(result.body.message);
        }
      });
    },
    //下拉刷新
    loadTop() {
      this.pagesize = 1;
      this.getgoods();
    },
    //上拉加载
    loadBottom() {
      console.log("上拉");
      this.pagesize++;
      this.getgoods();
    },
    //跳转到商品详情页
    //编程式导航，这里命名了path的话，params会被忽略，所以用了name
    getInfo(goodsId) {
      console.log(this);
      this.$router.push({name:'goodsinfo',params:{id:goodsId}})
    }
  },
  created() {
    this.getgoods();
  }
  // mounted() {
  //   this.loadTop();
  //   this.loadBottom();
  // }
};
</script>
<style lang="less" scoped>
#goods {
  background-color: #eee;
  width: 100%;
  /deep/.mint-loadmore-content {
    .goodList {
      width: 100%;
      padding: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
     
    }
    .list {
      width: 48%;
      box-shadow: 1px 1px 6px #ccc;
      border: 1px solid #cccccc;
      margin: 4px;
      padding: 2px;
      .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 275px;
        background: #fff;
        width: 100%;
        img {
          width: 100%;
        }
        h3 {
          font-size: 16px;
          color: #000;
          line-height: 20px;
        }
      }
      .price {
        padding: 10px 5px 20px;
        .now {
          color: red;
          font-weight: 600;
          font-size: 20px;
        }
        .old {
          color: #ccc;
          font-size: 14px;
          margin-left: 20px;
          text-decoration: line-through;
        }
      }
      .sell {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}


/**在网页中有两种跳转方式，
1.a标签跳转
2.window.location.href 编程式导航

$route,获取路由中参数
$router,是一个路由导航对象，用它可以方便的使用js代码，实现路由的前进后退
*/
</style>
