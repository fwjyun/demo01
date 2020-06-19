<template>
	<div class="category">
		<nav-bar class="category-nav">
			<div slot="center">分类</div>
		</nav-bar>
		<p>category</p>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
	name: 'Category',
	components: {
		NavBar
	}
};
</script>

<style>
.category-nav{
	background-color: #42B983;
	color:#ffffff;
}
</style>