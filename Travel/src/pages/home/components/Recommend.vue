<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li 
			class="item border-bottom" 
			v-for="item of recommendList"
			:key='item.id'
			>
				<img class="item-img" :src="item.imgUrl">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeRecommend',
	data () {
		return {
		recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_200x200_8606cb4d.jpg',
				title: '海昌发现王国',
				desc: '测试'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_200x200_8606cb4d.jpg',
				title: '海昌发现王国',
				desc: '测试'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_200x200_8606cb4d.jpg',
				title: '海昌发现王国',
				desc: '测试'
			}]
		}
		}
		
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: 2px
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