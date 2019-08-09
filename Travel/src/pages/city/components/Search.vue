<template>
	<div>
		<div class="search">
			<input 
			class="search-input" 
			type="text"  
			placeholder="输入城市名或拼音"
			v-model='keyword'
			>
		</div>
		<div class="search-content" ref='search' v-show='keyword'>
			<ul>
				<li
				 class="search-item border-bottom" 
				 v-for='item of list' 
				 :key='item.id'
				 @click="handleCityClick(item.name)"
				 >
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show='hasNoData'>
					没有匹配项
				</li>
			</ul>		
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
	name: 'CitySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoData () {
			return !this.list.length
		},
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
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if (!this.keyword) {
				this.list = []
				return 
			}
			this.timer = setTimeout(() => {
				const result = []
				for (let i in this.cities) {
					this.cities[i].forEach((value) => {
						if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
							result.push(value)
						}
					})
				}
				this.list = result
			}, 100)
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.search, {click: true})
	}
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
	.search-content
		z-index: 1
		overflow: hidden
		position: absolute
		top: 86px
		left: 0
		right: 0
		bottom: 0
		background: #eee
		.search-item
			line-height: 30px
			padding-left: 6px
			color: #666
			font-family: '微软雅黑'
</style>