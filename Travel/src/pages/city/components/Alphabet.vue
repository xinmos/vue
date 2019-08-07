<template>
	<ul class="list">
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</ul>
</template>

<script type="text/javascript">
export default {
	name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 296px
		bottom: 0
		width: 16px
		right: 0
		.item
			text-align: center
			line-height: 28px
</style>