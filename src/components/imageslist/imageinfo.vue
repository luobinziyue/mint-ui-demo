<template>
    <div id="imgDetail">
        <h3>{{list.title}}</h3>
        <div class="info">
            <span>发表时间：{{list.add_time|dateFormat("YYYY-MM-DD hh:mm:ss")}}</span>
            <span>点击:{{list.click}}</span>
        </div>
        <hr>
        <!-- 图片缩略图一个Vue集成PhotoSwipe图片预览插件 -->
        <!-- figure标签用来表示网站制作页面上一块独立的内容，将其从网页上移除后不会对网页上的其他内容产生影响。figure所表示的内容可以是图片、统计图或代码示例 -->
        <vue-preview :slides="slide1" ></vue-preview>
        
        <!-- 详情信息 -->
        <div v-html="list.content" class="content"></div>
        <!-- 评论区 -->
        <comments :son="id"></comments>
        
    </div>
</template>
<script>
import comments from "../news/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      slide1: [],
      list: {}
    };
  },
  components:{
    comments,
  },
  methods: {
    getimgs() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          this.list = res.body.message[0];
        }
      });
    },
    getImgInfo() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          res.body.message.forEach(item => {
            item.msrc =
              "http://ofv795nmp.bkt.clouddn.com//upload/201504/18/thumb_201504181230434303.jpg";
            item.w = 300;
            item.h = 300;
            //这个地方的宽高设置是为了全屏模式下的图片的宽高服务的
          });
          this.slide1 = res.body.message;
        }
      });
    }
    //缩略图放大后点击关闭按钮的时候会触发这个事件，所以这个事件是可以取消的？是的
    // handleClose() {
    //   console.log("close event");
    // }
  },
  created() {
    this.getimgs();
    this.getImgInfo();
  }
};
</script>
<style lang="less" scoped>
@color: #007aff;
#imgDetail {
  padding: 0 5px;
  h3 {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: @color;
  }
  .info {
    display: flex;
    justify-content: space-between;
    span {
      color: #aaa;
      font-size: 12px;
    }
  }
  .content {
    font-size: 14px;
    text-indent: 2em;
    margin-bottom: 20px;
  }
  /deep/figure {
    display: inline-block;
    margin: 1rem 10px;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
