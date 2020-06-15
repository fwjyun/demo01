import axios from 'axios'

export function request(config) {
	return new Promise((resolve,rejest) => {
		const instance = axios.create({
			baseURL: 'http://www.tp6.com',
			timeout: 5000
		})
		instance(config)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				rejest(err)
			})
	})
	}