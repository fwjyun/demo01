import {request} from './request.js'
// import qs from 'qs'
export function getListData() {
	return request({
		url: '/inc/api_mac10.php?ac=detail&ids=9651',
		// url: '/inc/api_mac10.php',
		// method: 'post',
		// data: {
		// 	ac: 'detail',
		// 	ids: 9651
		// }
	})
}
