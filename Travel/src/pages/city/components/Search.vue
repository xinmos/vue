<template>
	<div class="search">
		<input class="search-input" type="text"  placeholder="输入城市名或拼音">
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		line-height: 42px
		padding: 2px
		background: $bgColor
		.search-input
			padding: 2px
			box-sizing: border-box
			width: 100%
			height: 36px
			text-align: center
			border-radius: 6px
			line-height: 36px
			color: #666
</style>