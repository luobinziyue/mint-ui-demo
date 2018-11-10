// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';

//引入完整的mint-ui，需要注意的是，样式文件需要单独引入。
//mint-ui 只在vue中使用，专为vue定制
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//引入mui 下面的两个为拓展的字体图标服务
import './assets/mui/css/mui.css';
import './assets/mui/css/icons-extra.css';
import './assets/mui/fonts/mui-icons-extra.ttf'

//引入router文件配置
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入vue-resource 连接服务器
import VueResource from 'vue-resource';
Vue.use(VueResource);

//引入vue-preview 一个Vue集成PhotoSwipe图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


//注意这个全局默认的值要设在useVueResource后面
Vue.http.options.root = 'http://027xin.com:8899';
//设置post请求时表单数据格式组织形式
Vue.http.options.emulate = true;

//引入时间插件
import moment from 'moment';
//定义全局过滤器
Vue.filter('dateFormat',function(datastr,pattern) {
  return moment(datastr).format(pattern);
})

import router from './router/index.js';

// new Vue({
//   el:'#app',
//   data:{},
//   components:{ App },
//   template:'<App/>',
//   router,
// })
var vm = new Vue({
  el:'#app',
  render: createElement => createElement(App),
  router,

})




// Vue.config.productionTip = false

/* eslint-disable no-new */

