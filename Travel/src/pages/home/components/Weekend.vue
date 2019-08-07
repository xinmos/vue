<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li 
			class="item border-bottom" 
			v-for="item of recommendList"
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
	data () {
		return {
		recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg',
				title: '海昌发现王国',
				desc: '测试'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg',
				title: '海昌发现王国',
				desc: '测试'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg',
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
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
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