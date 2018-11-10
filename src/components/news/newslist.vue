<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"
            v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newslist/'+item.id ">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat("YYYY-MM-DD hh:mm:ss")}}</span>
                            <span>点击：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
            
            
        </ul>
    </div>
    
</template>
<script>
    export default {
        data() {
            return {
                newslist:[],
            }
        },
        methods:{            
            getNews() {
                this.$http.get('api/getnewslist').then(res=>{
                    console.log(res);
                    if(res.body.status == 0) {
                        this.newslist = res.body.message;
                    }
                    else{
                        Toast('获取数据失败');
                    }
                })
            }
        },
        created() {
            this.getNews();
        }
    }
    

</script>
<style lang="less">
    .mui-table-view {
        
        .mui-ellipsis {
            display: flex;
            justify-content: space-between;
            color: #007aff;

        }
    }

</style>
