<template>
	<div class="nav-bar"><!--  :style="theBgColor" -->
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
		props:{
			bgColor:{
				type:String,
				default: '#ff80ab'
			}
		},
		computed: {
			/*theBgColor(){
				return {"background-color":this.bgColor};
			}*/
		}
	}
</script>

<style>
	.nav-bar{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow: 0px -3px 10px 0px #888888;
	}

	.left,.right{
		width: 60px;
	}

	.center{
		flex:1;
	}
</style>