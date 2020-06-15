import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL = 'http://www.tp6.com'
// axios.defaults.timeout = 5000


// axios({
// 	url: '/admin/index/api',
// 	params: {
// 		id: 1
// 	},
// 	// method:'post',
// 	// data:{
// 	// 	id:2
// 	// }
// }).then(res => {
// 	console.log(res)
// }).catch(err => {
// 	console.log(err)
// })

//axiox 发送并发请求
// axios.all([
// 	axios({
// 		url: 'http://www.tp6.com/admin/index/api',
// 		params: {
// 			id: 1
// 		}
// 	}),
// 	axios({
// 		url: 'http://www.tp6.com/admin/index/api',
// 		method: 'post',
// 		data: {
// 			id: 2
// 		}
// 	}),
// 	axios({
// 		url: 'http://www.tp6.com/admin/index/api',
// 		method: 'post',
// 		data: {
// 			id: 3
// 		}
// 	})
// ]).then(results => {
// // console.log(results)
// console.log(results[2])
// })

// .then(axios.spread((a,b) => {
// 	console.log(a);
// 	console.log(b);
// 	console.log(a.data.name)
// }))

//创建axios请求实例
// const getData = axios.create({
// 	baseURL:'http://www.tp6.com',
// 	timeout: 5000
// })

// //调用实例
// getData({
// 	url: '/admin/index/api',
// 			method: 'post',
// 			data: {
// 				id: 3
// 			}
// }).then(res => {
// 	console.log(res)
// }).catch(err => {
// 	console.log(err)
// })

import {
	request
} from './network/request.js';

// request({
// 	url: '/admin/index/api',
// 	method: 'post',
// 	data: {
// 		id: 3
// 	}
// }, res => {
// 	console.log(res)
// }, err => {
// 	console.log(err)
// })

// request({
// 	url: '/admin/index/api',
// 	method: 'post',
// 	data: {
// 		id: 3
// 	}
// }, res => {
// 	console.log(res)
// }, err => {
// 	console.log(err)
// })

request({
	url: '/admin/index/api',
	method: 'post',
	data: {
		id: 3
	}
}).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err);
})
