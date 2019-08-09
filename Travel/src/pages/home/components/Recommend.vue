<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link
				target='li'
				class="item border-bottom" 
				v-for="item of list"
				:key='item.id'
				:to="'/detail/' + item.id"
				>
					<img class="item-img" :src="item.imgUrl">
					<div class="item-info">
						<p class="item-title">{{item.title}}</p>
						<p class="item-desc">{{item.desc}}</p>
						<button class="item-button">查看详情</button>
					</div>
			</router-link>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeRecommend',
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
	.border-bottom
		padding-bottom: 12px
	.item
		display: flex
		height: 100px
		overflow: hidden
		.item-img
			width: 99px
			height: 99px
			padding: 1px
		.item-info
			margin-left: 1px
			flex: 1
			padding 1px
			.item-title
				line-height: 1.99rem
				font-size: .99rem
				ellipsis()
			.item-desc
				line-height: 34px
				color: #ccc
				ellipsis()
			.item-button
				line-height: 22px
				border: 0
				margin: 0
				background: #ff9300
				padding: 0 6px
				color: #fff
</style>