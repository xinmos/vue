<template>
	<div>
		<div class="banner" @click='handleGallaryClick'>
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1411/97/9cc62ecd909d7bec35106ab465d44f20.water.jpg_600x330_e9f90b2a.jpg" />
			<div class="banner-info">
				<div class="banner-title">绵阳千佛山漂流</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe616;</span>
					39
				</div>
			</div>
		</div>
		<common-gallary
		 :imgs='imgs' 
		 v-show='showGallary'
		 @close='handleGallaryclose'
		 ></common-gallary>
	</div>
</template>

<script type="text/javascript">
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name: 'DetailBanner',
		data () {
			return {
				showGallary: false,
				imgs: ['http://img1.qunarzz.com/sight/p0/1906/30/30188514bfda6858a3.img.jpg','http://img1.qunarzz.com/sight/p0/1906/9a/9a12ebdce5893bdaa3.img.jpg']
				}
		},
		components: {
			CommonGallary
		},
		methods: {
			handleGallaryClick () {
				this.showGallary = true
			},
			handleGallaryclose () {
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		voerflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: 26px
			color: #fff
			background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))
			.banner-title
				flex: 1
				font-size: 13px
				padding: 0 12px
			.banner-number
				padding: 8px
				height: 10px
				font-size: 13px
				line-height: 10px
				border-radius: 2px
				background: rgba(0, 0, 0, .6)
				.banner-icon
					font-size 13px
</style>