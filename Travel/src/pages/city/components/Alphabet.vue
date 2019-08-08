<template>
	<ul class="list">
		<li
		 class="item" 
		 v-for='item of letters' 
		 :key='item'
		 :ref='item'
		 @touchstart='handleTouchStart'
		 @touchmove='handleTouchMove'
		 @touchend='handleTouchEnd'
		 @click='handleLetterClick'
		 >{{item}}</li>
	</ul>
</template>

<script type="text/javascript">
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters () {
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	data () {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods: {
		handleLetterClick (e){
			this.$emit('change', e.target.innerText)
		},
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if (this.touchStatus) {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 89
					const index = Math.floor((touchY - this.startY) / 18) - 1
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				}, 16)
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		}
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
		top: 100px
		bottom: 0
		width: 16px
		right: 0
		.item
			text-align: center
			line-height: 18px
			font-size: 10px
			color: $bgColor
</style>