<template lang="html">
    <div class="temp">

        <silder :imgs="list">
        </silder>
        <!--轮播图组件-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callme">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photoinfo">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">****</div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--九宫格组件-->
    </div>
</template>
<script>
    import { Toast} from 'mint-ui';
//    导入Toast方法
    import common from '../kits/common.js';
//  导入common方法
    import silder from './subcom/silder.vue';
    export default {
        components:{
            silder
        },
        data(){
            return {
                list:[]
            }
        },
        created: function(){
            this.getImgs();
//  在运行生命周期函数的时候就要调用getimgs方法。让用户能够看到数据

        },
        methods:{
            getImgs(){
                var url=common.apidomain+'/api/getlunbo';
                this.$http.get(url).then(function(res){
                    var data=res.body;
                    if(data.status!=0){
                        Toast(data.message);
                    }
                    this.list=data.message;
                })
            }
        }
    }
</script>
<style scoped lang="css">
    .mint-swipe{
        height: 300px;
    }
    .mint-swipe-item img{
        width: 100%;
    }
    .mint-swipe-item{
        background-color: red;
        width: 100%;
        height: 300px;
    }

    .mui-content,.mui-content ul{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right:0px;
        border-bottom:0px;
    }
    .mui-grid-view.mui-grid-9{
        border-top:0px;
        border-left:0px;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: '';
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }

    .mui-icon-home:before{
        background-image: url(../../statics/imgs/1.png);
    }

    .mui-icon-email:before{
        background-image: url(../../statics/imgs/2.png);
    }
    .mui-icon-chatbubble:before{
        background-image: url(../../statics/imgs/3.png);
    }
    .mui-icon-location:before{
        background-image: url(../../statics/imgs/4.png);
    }
    .mui-icon-search:before{
        background-image: url(../../statics/imgs/5.png);
    }
    .mui-icon-phone:before{
        background-image: url(../../statics/imgs/6.png);
    }
</style>