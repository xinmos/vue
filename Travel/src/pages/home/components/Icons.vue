<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for='(page, index) of pages' :key='index'>
				<div 
				  class="icon"
				  v-for='item of page'
				  :key='item.id'
				>
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeIcons',
	data (){
		return {
			iconList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '景点门票'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			},{
				id: '0003',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',
				desc: '大连必游'
			},{
				id: '0004',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/67370daeaa1a8ac24a6c7930f74fee0c.png',
				desc: '发现王国'
			},{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '景点门票'
			},{
				id: '0006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			},{
				id: '0007',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',
				desc: '大连必游'
			},{
				id: '0008',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/67370daeaa1a8ac24a6c7930f74fee0c.png',
				desc: '发现王国'
			},{
				id: '0009',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
				desc: '暑假优惠'
			}]
		}
	},
	computed: {
		pages (){
			const pages = []
			this.iconList.forEach((item,index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%
	.icon
		position: relative
		overflow: hidden
		height: 0
		float: left
		width: 25%
		padding-bottom: 25%
		.icon-img
			position: absolute
			top: 8px
			left: 0
			right: 0
			bottom: 34px
			box-sizing: border-box
			padding: 1px
			.icon-img-content
				display: block
				margin: 0 auto
				height: 100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: 44px
			line-height: 44px
			color: $darkTextColor
			text-align: center
			ellipsis()
</style>