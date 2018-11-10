<template>

<div id="app">
  <!-- 头部 -->
  <mt-header fixed title="购物APP.demo"></mt-header>

  <!-- 中间主体区域 -->
  <transition>
    <router-view></router-view>
  </transition>

  <!-- 底部 -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-ii" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-ii" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-ii" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-ii" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

</div>
 
</template>

<script>
// import { Toast } from "mint-ui";
</script>

<style lang="less">
//采用less/scss记得安装相关的包，脚手架没有预先安装包
// 给style添加scoped来使得当前样式只作用于当前组件的节点
#app {

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 40px;
  padding-bottom: 50px;
  //overflow-x:hidden是为了解决横轴页面滑动有滚动条的问题
  overflow-x: hidden;

  .mint-header {
    z-index: 10;
  }

  .v-enter {
    opacity: 0;
    transform: translate(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translate(-100%);
    position: absolute; //这个记得放在.v-leave-to下面
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
}
//改类名解决tabber无法切换的问题
.mui-bar-tab .mui-tab-item-ii.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-ii {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
  
}
.mui-bar-tab .mui-tab-item-ii .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-ii .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
