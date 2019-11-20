import VueRouter from 'vue-router'


// 导入子组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import Newslist from './components/news/Newslist.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes:[
    {path:'/',redirect :'/home'},
    {path: '/home' ,component: HomeContainer },
    {path: '/member' ,component: MemberContainer },
    {path: '/shopcar' ,component: ShopcarContainer },
    {path: '/search' ,component: SearchContainer },
    {path: '/home/newslist' , component:Newslist},
    {path: '/home/newsinfo/:id' , component:NewsInfo   },

   
  ],
  linkActiveClass:'mui-active'  //覆盖高亮的类
})

// 把路由对象暴露出去
export default router