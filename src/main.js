// 入口文件
import Vue from '../node_modules/vue/dist/vue.js'

// 导入mui 的样式

import './lib/mui/css/mui.min.css'

// 导入mint-ui的组件
import { Header } from  "mint-ui"

Vue.component(Header.name , Header)

import app from './App.vue'

var vm = new Vue ({
    el:'#app',
    render :c=> c(app)
})