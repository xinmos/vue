<template>
	<div class="header">
		城市选择
		<router-link to='/'>
			<div class="iconfont header-back">&#xe658;</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		position: relative
		overflow: hidden
		height: $HeaderHeigth
		line-height: $HeaderHeigth
		text-align: center
		color: #fff
		background: $bgColor
		font-size: 1.1rem
		.header-back
			position: absolute
			top: 0
			left: 0
			width: 32px
			text-align: center
			font-size: 1.7rem
			color: #eee
</style>