<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li 
			class="item border-bottom" 
			v-for="item of list"
			:key='item.id'
			>
			<div item-img-wrapper>
				<img class="item-img" :src="item.imgUrl">
			</div>
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
			</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeWeekend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		line-height: 35px
		background: #eee
		text-indent: 2px
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33%
	.item-img
		width: 100%
	.item-info
		margin-left: 24px
		padding 1px
		.item-title
			line-height: 1.99rem
			font-size: .99rem
			ellipsis()
		.item-desc
			line-height: 34px
			color: #ccc
			ellipsis()
</style>