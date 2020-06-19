<template>
	<div class="main-tab-bar" >
		<tab-bar>
			<tab-bar-item path="/home" activecolor="blue">
				<img src="../../../assets/img/svg/home_active.svg" alt="" slot="item-icon_active" />
				<img src="../../../assets/img/svg/home.svg" alt="" slot="item-icon" />
				<div slot="item-text">首页</div>
			</tab-bar-item>
			
			<tab-bar-item path="/category" activecolor="blue">
				<img src="../../../assets/img/svg/category_active.svg" alt="" slot="item-icon_active" />
				<img src="../../../assets/img/svg/category.svg" alt="" slot="item-icon" />
				<div slot="item-text">分类</div>
			</tab-bar-item>
			
			<tab-bar-item path="/other" activecolor="blue">
				<img src="../../../assets/img/svg/other_active.svg" alt="" slot="item-icon_active" />
				<img src="../../../assets/img/svg/other.svg" alt="" slot="item-icon" />
				<div slot="item-text">其他</div>
			</tab-bar-item>
			
			<tab-bar-item path="/my" activecolor="blue">
				<img src="../../../assets/img/svg/my_active.svg" alt="" slot="item-icon_active" />
				<img src="../../../assets/img/svg/my.svg" alt="" slot="item-icon" />
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue';
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
	
	export default {
		name: 'mainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	};
</script>

<style>
</style>
