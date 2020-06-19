<template>
	<div class="other">
		<nav-bar class="other-nav">
			<div slot="left">返回</div>
			<div slot="center">其他</div>
			<div slot="right">?</div>
		</nav-bar>
		<p>other</p>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
	name: 'Other',
	components: {
		NavBar
	}
};
</script>

<style>
.other-nav{
	background-color: #42B983;
	color:#ffffff;
}
</style>