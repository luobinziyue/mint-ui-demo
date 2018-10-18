<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="固定在底部">固定在顶部</mt-header>

    <!-- 路由部分 -->
    <!-- <router-view></router-view> -->

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    
    
  </div>

</template>

<script>
// import HelloWorld from "./components/HelloWorld";

// import { Toast } from "mint-ui";

export default {
  name: "App"
  // components: {
  //   HelloWorld
  // },
  // methods: {
  //   show() {
  //     Toast({
  //       message: "提示",
  //       position: "buttom",
  //       duration: 3000
  //     });
  //   }
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
