import axios from 'axios'

export function request(config, success, failure) {
	const instance = axios.create({
		baseURL: 'http://www.tp6.com',
		timeout: 5000
	})
	instance(config)
		.then(res => {
			success(res)
		})
		.catch(err => {
			failure(err)
		})
}

// export function xxx(参数， 函数参数， 函数参数) {
// 	// 1.创建axios实例
// 	const aaa = axios.create({
// 		baseURL: '',
// 		timeout: 1000,
// 		// ...
// 	})
// 	// 2.发送请求
// 	instance(参数)
// 		.then(res => {
// 			函数参数(res)
// 		})
// 		.catch(err => {
// 			函数参数(err)
// 		})
// }
