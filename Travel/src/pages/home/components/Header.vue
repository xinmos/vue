<template>
	<div>
		<div class="header">
			<div class="header-left">
				<span class="iconfont back-icon">&#xe658;</span>
			</div>
			<div class="header-input">
				<span class="iconfont">&#xe63c;</span>
				输入景点/城市/游玩主题
			</div>
			<div class="header-right">
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe65c;</span>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'HomeHeader',
		props: {
			city: String
		}
	}
</script>

<style lang="stylus" scoped> 
	@import '~styles/varibles.styl'
	.header
		display: flex
		line-height: 53px
		background: $bgColor
		color: #fff
		.header-left
			width: 32px
			float: left
			.back-icon
				text-align: center
				font-size: 30px
		.header-input
			flex: 1
			height: 44px
			line-height: 44px
			margin-top: 6px
			margin-left: 5px
			background: #fff
			border-radius: 4px
			color: #ccc
		.header-right
			width: 62px
			float: right
			text-align: center
			.arrow-icon
				text-align: center
</style>