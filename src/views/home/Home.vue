<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">首页</div>
		</nav-bar>
		
		<recommend-view :recommends="recommends"/>
		
		<div>
			<a :href="res.vod_play_url"><img :src="res.vod_pic" alt="封面图"></a>
			<br>
			<h2>{{res.vod_name}}</h2>
		</div>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import RecommendView from './homeTem/RecommendView.vue'
import {getListData} from '../../network/home.js'

export default {
	name: 'Home',
	components: {
		NavBar,
		RecommendView
	},
	data(){
		return {
			res:[],
			recommends:[]
		}
	},
	computed:{
		// getimg(){
		// 	return this.res.vod_pic
		// }
	},
	created() {
		// 'detail',9651,2
		getListData().then(res => {
			console.log(res.data.list[0]);
			this.res = res.data.list[0]
		})
	}
};
</script>

<style>
.home-nav{
	background-color: #42B983;
	color:#ffffff;
}
</style>