import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import appnav1 from '@/components/appnav1'
import appnav2 from '@/components/appnav2'
import appnav3 from '@/components/appnav3'
import appnav4 from '@/components/appnav4'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)



export default new Router({
  routes: [
    {path: '/',redirect:'/appnav1'},
    {path: '/appnav1',name: 'appnav1',component: appnav1},
    {path: '/appnav2',name: 'appnav2',component: appnav2},
    {path: '/appnav3',name: 'appnav3',component: appnav3},
    {path: '/appnav4',name: 'appnav4',component: appnav4}
  ],
  mode:'history'
})
