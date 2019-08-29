<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<ul class="content">
			<router-link
				target='li'
				class="item border-bottom" 
				v-for="(item, index) of list.sightList"
				v-if='index < 10'
				:key='item.id'
				:to="'/detail/' + item.id"
				>
					
					<img class="item-img" :src="item.imgURL">
					<div class="item-info">
						<p class="item-title">{{item.name}}</p>
						<p class="item-desc">{{item.sightSimpleDesc}}</p>
						<table class="item-table">
							<tr class="item-price">
								<td class="item-type">去哪儿</td>
								<td>￥{{item.qunarPrice}}</td>
								<td class="item-price-a">起</td>
							</tr>
							<tr class="item-price">
								<td class="item-type">同程</td>
								<td>￥{{item.tongcPrice}}</td>
								<td class="item-price-a">起</td>
							</tr>
							<tr class="item-price">
								<td class="item-type">途牛</td>
								<td>￥{{item.tuniuPrice}}</td>
								<td class="item-price-a">起</td>
							</tr>
						</table>
					</div>
			</router-link>
		</ul>
		<router-link tag='div' class="add-more" to='/sight'>查看所有</router-link>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios' 
import { mapState } from 'vuex'
export default {
	name: 'HomeRecommend',
	data () {
		return {
			list: Object,
		}
	},
 	computed: {
 		...mapState(['city'])
 	},
 	methods: {
 		getDataInfo (res) {
			axios({
				url: 'http://127.0.0.1:8000/ajaxRe/',
				method: 'get',
				params: {
					'city': this.city,
				},
				responseType: 'json'
			}).then(this.getDataSucc)
 		},
 		getDataSucc (res) {
 			res = res.data
 			if(res.ret) {
 				this.list = res.dict
 			}
 		}
 	},
 	mounted () {
 		this.lastCity = this.city
 		this.getDataInfo()
 	},
 	activated () {
 		if(this.lastCity !== this.city) {
 			this.lastCity = this.city
 			this.getDataInfo()
 		}
 	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		line-height: 1.6rem
		background: #eee
		text-indent: 2px
	.item
		display: flex
		height: 6.5rem
		overflow: hidden
		.item-img
			width: 6.5rem
			height: 6.5rem
			padding: 1px
		.item-info
			margin-left: 1px
			flex: 1
			.item-title
				line-height: 1.99rem
				font-size: 1rem
				color: #000
				ellipsis()
			.item-desc
				line-height: 1rem
				font-size: 0.7em
				color: #ccc
				ellipsis()
			.item-table
				width: 100%
				.item-price
					color: #ff8300
					font-size: 0.8rem
					text-align: right
					padding-right: 10px
					width: 100%
					height: 1rem
					.item-price-a
						color: #000
						font-size: 0.7rem
						text-align: left
					.item-type
						font-size: 0.7rem
						color: #000
	.add-more
		padding: .4rem 0
		color: #00afc7
		text-align: center
		font-size: .8rem
</style>