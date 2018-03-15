// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import axios from 'axios'



Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'



const newVue = new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})

router.beforeEach((to,from,next) => {
	if(parseInt(to.name) > parseInt(from.name)){
		newVue.$store.state.direction = 'Left'
	}else{
		newVue.$store.state.direction = 'Right'
	}
	next()
})



