<template>
    <div>
        <h3>评论子组件</h3>
        <hr>
        <textarea placeholder="请输入要评论的类容" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postcmt">发表评论</mt-button>

        <div class="cmtList">
            <div class="cmtItem" v-for="(item,i) in comments" :key="item.id">
                <div class="cmtTitle">第{{i+1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dateFormat('YYYY-MM-DD hh:mm:ss')}}</div>
                <div class="cmtBody">{{item.content=="undefined"?"该用户太懒，什么都没有留下":item.content}}</div>
            </div>
        </div>
        
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      pagesize:1,  
      comments: [],
      msg:'',
    };
  },
  props:['son'],
  created() {
      this.getcmt();
  },
  methods: {
    getcmt() {
      this.$http.get('api/getcomments/'+this.son+'?pageindex='+this.pagesize).then(res=>{
          console.log(res);
          if(res.body.status == 0) {
              //每当加载更多时，不应该把原来的数据覆盖，而是进行数据的拼接，concat()方法可以将新数据拼接到原数据数组内
              this.comments = this.comments.concat(res.body.message);
              
          }else{
              Toast('获取数据失败');
          }
      })
    },
    //点击加载更多事件
    getmore() {
        this.pagesize++;
        this.getcmt();
    },
    //提交评论按钮，这里记得先判断内容是否为空，我就不写了
    postcmt() {
        this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.msg},{}).then(res=>{
            console.log(res);
            if(res.body.status == 0){
                var list = {user_name:'匿名用户',add_time:Date.now(),content:this.msg};
                this.comments.unshift(list);
                this.msg = '';
            }else{
                Toast("获取数据失败");
            }
        })
        
    }
  }
};
</script>
<style lang="less">
textarea {
  font-size: 14px;
  height: 80px;
}
.cmtList {
    margin: 5px 0;
  .cmtItem {
      font-size: 14px;
    .cmtTitle {
      line-height: 30px;
      background-color: #ccc;
    }
    .cmtBody {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>
