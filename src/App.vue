<template>
    <div>
        <mt-header fixed title="Vue项目商场"></mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">通讯录</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>
</template>
<script>

    export default{  // es6的导出对象的写法
        data(){  //等价于 es5的 data:function(){
            return {

            }
        },
        methods:{

        },
        created(){

        }
    }
</script>
<style scoped>
    .red{
        color:red;
    }
</style>