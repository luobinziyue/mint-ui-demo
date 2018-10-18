
import VueRouter from 'vue-router';

import App from '../App.vue';
import home from '../components/tabbar/home';
import member from '../components/tabbar/member';
import shopcart from '../components/tabbar/shopcart';
import search from '../components/tabbar/search';



var router = new VueRouter({
    routes:[
        {path:'/',component:home,alias:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcart',component:shopcart},
        {path:'/search',component:search}
        
    ],
    linkActiveClass:'mui-active',
    // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

export default router;