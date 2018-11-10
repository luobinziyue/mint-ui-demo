<template>
    <div>
        <!-- 轮播图用法 -->
        <mt-swipe :auto="3000" scoped>
            <mt-swipe-item v-for="(item,index) in swipe" :key="index">
                <img v-bind:src="item.img" alt="">
            </mt-swipe-item>
           
        </mt-swipe>
    </div>
    
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["swipe"]
};
</script>
<style lang="less" scoped>
// 轮播图
.mint-swipe {
  height: 200px;
  text-align: center;
  .mint-swipe-item {
    
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
