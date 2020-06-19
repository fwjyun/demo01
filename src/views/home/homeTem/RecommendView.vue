<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommends-item" :key="item">
			<a :href="item.like">
				<img :src="item.image" alt="" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props: {
		recommends: {
			type: Array,
			default(){
				return []
			}
		}
	}
};
</script>

<style>
	.recommend{
		display: flex;
	}
	.recommends-item{
		flex: 1;
	}
</style>
