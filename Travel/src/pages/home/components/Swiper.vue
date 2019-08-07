<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for='item of swiperList' :key='item.id'>
		    	<img 
			    	class="swiper-img" 
			    	:src="item.imgUrl" />
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  	</div>
</template>

<script>
	export default{
		name: 'HomeSwiper',
		data (){
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true

				},
				swiperList: [{
					id: '0001',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/c1dc49b4e28c3f7b3b1fa8d8c64b4bfc.jpg_750x200_8f2bf534.jpg'
				},{
					id: '0002',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/403b2307cf73138c7d153d098e746a26.jpg_750x200_f3afc85d.jpg'
				}]
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet
		background: #fff
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
<<<<<<< HEAD
		padding-bottom: 26.25%
=======
		padding-bottom: 31.25%
>>>>>>> 1b1b6240b45e44aeaff3e2a76e88b2fb355ece61
		.swiper-img
			width: 100%
</style>