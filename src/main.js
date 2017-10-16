import Vue from 'vue';
//导入vue的包
import App from './App.vue';
//导入app.vue对象
import VueRouter from 'vue-router';
//继承vur-router
Vue.use(VueRouter);
//绑定vue-router到Vue对象上、
import home from './compinents/Home.vue';
import shopcar from './compinents/shopcar/car.vue';
import newslist from './compinents/news/newslist.vue';
import newsinfo from './compinents/news/newsinfo.vue';
import photolist from './compinents/photo/photolist.vue';
import photoinfo from './compinents/photo/photoinfo.vue';
import goodslist from './compinents/goods/goodslist.vue';
import goodsinfo from './compinents/goods/goodsinfo.vue'
import goodsdesc from './compinents/goods/goodsdesc.vue'
import goodscomment from './compinents/goods/goodscomment.vue'

//导入路由组件

var router1=new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {path : '/',redirect:'home'},
        {path : '/home', component: home},
        {path: '/shopcar', component: shopcar},
        {path: '/news/newslist', component : newslist},
        {path: '/news/newsinfo/:id', component : newsinfo},
        {path: '/photo/photolist', component : photolist},
        {path: '/photo/photoinfo/:id', component : photoinfo},
        {path:'/goods/goodslist',component:goodslist},
        {path:'/goods/goodsinfo/:id',component:goodsinfo},
        {path:'/goods/goodsdesc/:id',component:goodsdesc},
        {path:'/goods/goodscomment/:id',component:goodscomment}
    ]
});
import mintUi from 'mint-ui';
import 'mint-ui/lib/style.min.css'
Vue.use(mintUi);
//绑定mintui组件

import '../statics/mui/css/mui.css'
//使用mui的样式

import '../statics/css/site.css'
//引入全局的样式

import moment from 'moment'
Vue.filter('datefmt',function(input,fmtstring){
    return moment(input).format(fmtstring)
});
//定义一个全局的过滤器实现日期的格式化
import VueResource from 'vue-resource';
Vue.use(VueResource);


import VuePreview from 'vue-preview';
Vue.use(VuePreview);


new Vue({
    el:'#app',
    router:router1,
    render:c=>c(App)
})