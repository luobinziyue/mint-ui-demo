<template>
    <div>
        <!-- 顶部列表项 -->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                
                <div class="mui-scroll">
                    <a href="#" v-bind:class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in imglist" :key="item.id" @click="getimgs(item.id)">
                    {{item.title}}
                    </a>
                    
                </div>
            </div>            

        </div>

        <!-- 图片列表区域 mint-ui的懒加载 为 img 元素添加 v-lazy 指令，指令的值为图片的地址。同时需要设置图片在加载时的样式-->
        <ul class="imgli">
            <router-link :to="'/home/imageslist/'+item.id" v-for="item in list" :key="item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h3>{{item.title}}</h3>
                    <div>{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>
<script>
//webpack 打包启用严格模式，"caller"等是在非严格模式下用的
//引入这个mui就无法跳转其他页面，如果没有这个mui的引入就会报错，这个应该够如何解决？后来发现是一个类名mui-tab-item引起的，把这个类名换掉就会解决这个问题
import mui from "../../assets/mui/js/mui.js";

export default {
  data() {
    return {
      imglist: [],
      list: []
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //当组件中的dom结构渲染到页面中后会执行这个函数
  },
  methods: {
    getall() {
      this.$http.get("api/getimgcategory").then(res => {
        console.log(res);
        if (res.body.status == 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.imglist = res.body.message;
        }
      });
    },
    getimgs(cateId) {
      this.$http.get("api/getimages/" + cateId).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          this.list = res.body.message;
        }
      });
    }
  },
  created() {
    this.getall();
    this.getimgs(0);
  }
};
</script>
<style lang="less">
//解决mui组件滚动有警示的问题
//css属性touch-action用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作
* {
  touch-action: pan-x;
}
.imgli {
    margin: 0;
    padding: 0 10px;
    list-style: none;
  li {
    margin-bottom: 10px;
    position: relative;
    img {
        width: 100%;
        vertical-align: middle; 
    }
    img[lazy="loading"] {        
        margin: auto;      
    }
    .info {
        position: absolute;
        bottom: 0;
        height: 85px;
        background-color: rgba(0,0,0,0.4);
        h3 {
            color: #ffffff;
            font-size: 14px;
        }
        div {
            color: #ffffff;
            font-size: 13px;                      
        }
    }
  }
}

//mui引入scroll功能，发现出现"caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them"这样的报错，这是因为mui.js里的这些在严格模式下不被接受。所以需要安装一个babel-plugin-transform-remove-strict-mode包，然后在.babelrc里添加相关代码，
</style>
