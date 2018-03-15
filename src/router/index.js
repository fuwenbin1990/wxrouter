import Vue from 'vue'
import Router from 'vue-router'
//滑动切换的路由
import appnav1 from '@/components/appnav1'
import appnav2 from '@/components/appnav2'
import appnav3 from '@/components/appnav3'
import appnav4 from '@/components/appnav4'

Vue.use(Router)


//路由name值命名为数字开头，导航从左到右数值依次增大


export default new Router({
  routes: [ 
    {path: '/',redirect:'/appnav1'},
    {path: '/appnav1',name: '1d',component: appnav1},
    {path: '/appnav2',name: '2d',component: appnav2},
    {path: '/appnav3',name: '3d',component: appnav3},
    {path: '/appnav4',name: '4d',component: appnav4}
  ],
  mode:'history'
})
