<template>
	<div>
		<detail-banner
		  :sightName='sightName'
		  :bannerImg='bannerImg'
		  :bannerImgs='gallaryImgs'
		></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :categoryList='categoryList'></detail-list>
		</div>
	</div>
</template>

<script type="text/javascript">
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import axios from 'axios'

	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
				sightName: '',
				bannerImg: '',
				gallaryImgs: [],
				categoryList: []
			}
		},
		methods: {
			getDetailInfo () {
				axios.get('http://127.0.0.1:8000/detail/')
				.then(this.handleGetDataSucc)
			},
			handleGetDataSucc (res) {
				res = res.data
				if (res.ret && res.data) {
					const data  = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.categoryList = data.categoryList
				}
			}
		},
		mounted () {
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 1500px
</style>