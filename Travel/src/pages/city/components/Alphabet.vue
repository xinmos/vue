<template>
	<ul class="list">
		<li class="item" v-for='(item,key) of cities' :key='key'>{{key}}</li>
	</ul>
</template>

<script type="text/javascript">
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 269px
		bottom: 0
		width: 16px
		right: 0
		.item
			text-align: center
			line-height: 16px
			font-size: 10px
</style>