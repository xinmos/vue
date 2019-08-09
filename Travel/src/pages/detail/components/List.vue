<template>
	<div>
		<div
		 class="item"
		 v-for='(item, index) of categoryList'
		 :key='index'>
		 	<div class="item-title">
		 		<span class="item-title-icon"></span>
		 		{{item.title}}
		 	</div>
		 	<div 
		 	 v-if='item.children'
		 	 class='item-children'>
		 		<detail-list :categoryList='item.children'></detail-list>
		 	</div>
		 </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'DetailList',
		props: {
			categoryList: Array
		}
	}
</script>

<style lang="stylus" scoped> 
	@import '~styles/varibles.styl'
	.item-title-icon
		display: inline-block
		width: 20px
		height: 20px
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 4px no-repeat
		margin-right: -4px
		background-size: 20px 142px
	.item-title
		line-height: 44px
		font-size: 20px
		padding: 2px
	.item-children
		padding 0 10px
</style>