import axios from 'axios'


export function request(config) {
	const instance = axios.create({
		baseURL: 'https://www.mhapi123.com',
		timeout: 5000
	})
	return instance(config)
}
