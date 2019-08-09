<template>
	<div>
		<router-link
		 tag='div'
		 to='/' 
		 class="header-abs"
		 v-show='showAbs'
		 >
			<div class="iconfont header-abs-icon">&#xe658;</div>
		</router-link>
		<div class="header-fixed" v-show='!showAbs' :style='opacityStyle'>
			<router-link to='/'>
				<div class="iconfont header-fixed-back">&#xe658;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'DetailHeader',
		data () {
			return {
				showAbs: true,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods: {
			handleScroll () {
				const top = document.documentElement.scrollTop
				if ( top > 60 ) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity 
					this.opacityStyle = { opacity }
					this.showAbs = false
				} else {
					this.showAbs = true
				}
				console.log()
			}
		},
		activated() {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped> 
	@import '~styles/varibles.styl'
	.header-abs
		position: absolute
		left: 10px
		top: 10px
		width: 28px
		height: 28px
		text-align: center
		line-height: 28px
		border-radius: 14px
		background: rgba(0, 0, 0, 0.8)
		.header-abs-icon
			color: #fff
			font-size: 28px
	.header-fixed
		position: fixed
		top: 0
		right: 0
		left: 0
		height: $HeaderHeigth
		line-height: $HeaderHeigth
		text-align: center
		color: #fff
		background: $bgColor
		font-size: 21px
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: 32px
			text-align: center
			font-size: 30px
			color: #eee
</style>