import VueRouter from 'vue-router'

// import App from '../App.vue';
import home from '../components/tabbar/home';
import member from '../components/tabbar/member';
import shopcart from '../components/tabbar/shopcart';
import search from '../components/tabbar/search';
import newslist from '../components/news/newslist';
import detail  from '../components/news/detail';

import geiImage from '../components/imageslist/getimages';
import imageinfo from '../components/imageslist/imageinfo';

import products from '@/components/products/productslist';
import goodsinfo from '@/components/prducts/goodsinfo'


var router = new VueRouter({
    routes:[
        {path:'/',component:home,alias:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcart',component:shopcart},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newslist/:id',component:detail},
        {path:'/home/imageslist',component:geiImage},
        {path:'/home/imageslist/:id',component:imageinfo},
        {path:'/homo/productslist',component:products},
    ],
    linkActiveClass:'mui-active',
    // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active

})

export default router;

