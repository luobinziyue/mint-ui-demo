<template>
    <div class="newsDetail">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle"> 
            <span>发表时间：{{detail.add_time | dateFormat("YYYY-MM-DD hh-mm-ss")}}</span>
            <span>点击：{{detail.click}}</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="detail.content"></div>
        <!-- 评论区域 -->
        <comment :son="id"></comment>
    </div>
</template>
<script>
//引入评论组件
import comment from "./comment";

export default {
  data() {
    return {
      id: this.$route.params.id,
      detail: {}
    };
  },
  components: {  //引入子组件comment
    comment,       
  },
  methods: {
    getDefault() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          this.detail = res.body.message[0];
        } else {
          Toast("获取数据失败");
        }
      });
    }
  },
  created() {
    this.getDefault();
  }
};
</script>
<style lang="less" scoped>
.newsDetail {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    color: #007aff;
  }
  /deep/ .content {
    img {
      width: 100%;
    }
  }
}
// 实例发现，由v-html创建的DOM内容不受scoped样式影响，但是仍可通过深度作用选择器来为他们设置样式
</style>
