// 入口文件
import Vue from '../node_modules/vue/dist/vue.js'

// 导入路由的包
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 导入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})


// 导入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';




// 导入路由模块
import router from "./router.js"

// 导入mui 的样式

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入mint-ui的组件
import { Header,Swipe, SwipeItem ,Button,Lazyload} from  "mint-ui"

Vue.component(Header.name , Header)
Vue.component(Swipe.name , Swipe)
Vue.component(SwipeItem.name , SwipeItem)
Vue.component(Button.name , Button)



Vue.use(Lazyload);

import app from './App.vue'

var vm = new Vue ({
    el:'#app',
    render :c=> c(app),
    router  //挂在路由
})