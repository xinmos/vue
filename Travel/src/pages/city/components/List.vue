<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title boder-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title boder-topbottom">热门城市</div>
				<div class="button-list">
					<div
					 class="button-wrapper" 
					 v-for='item of hot' 
					 :key='item.id'
					 @click="handleCityClick(item.name)"
					 >
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div
			 class="area" 
			 v-for='(item,key) of cities' 
			 :key='key'
			 :ref='key'
			 >
				<div class="title boder-topbottom">{{key}}</div>
				<div class="item-list">
					<div
					 class="item border-bottom"
					 v-for='innerItem of item' 
					 :key='innerItem.id'
					 @click="handleCityClick(innerItem.name)"
					 >
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
	name: 'CityList',
	props: {
		cities: Object,
		hot: Array,
		letter: String
	},
	computed: {
		...mapState({
				currentCity: 'city'
			})
	},
	methods: {
		handleCityClick (city) {
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	watch: {
		letter () {
			if(this.letter){
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper, {click: true})
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.boder-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
	.list
		overflow: hidden
		position: absolute
		top: 98px
		left 0
		right: 0
		bottom: 0
		.title
			line-height: 24px
			background: #eee
			padding-left: 10px 
			color: #666
			font-size: 12px
		.button-list
			overflow: hidden
			padding: 6px 36px 6px 6px
			.button-wrapper
				float: left
				width: 33.33%
				.button
					margin: 4px
					padding: 3px 0
					text-align: center
					border: 2px solid #ccc
					border-radius: 5px
		.item-list
			.item
				line-height: 40px
				padding-left: 8px
</style>