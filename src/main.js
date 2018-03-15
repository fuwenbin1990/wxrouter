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

// router.beforeEach((to,from,next) => {
// 	console.log(to)
// 	console.log(from)
// 	next()
// })

// axios.interceptors.request.use(config => {
// 	console.log(config)
// 	return config
// },err => {
// 	return Promise.reject(err)
// })

// axios.interceptors.response.use(response => {
// 	//console.log(response)
// 	response.data.forEach(val => {
// 		val.name = '娃哈哈'
// 	});
// 	return response
// },err => {
// 	return Promise.reject(err)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
