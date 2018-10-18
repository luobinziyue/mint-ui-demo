// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
//引入完整的mint-ui，需要注意的是，样式文件需要单独引入。
//mint-ui 只在vue中使用，专为vue定制
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUi);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  
})
