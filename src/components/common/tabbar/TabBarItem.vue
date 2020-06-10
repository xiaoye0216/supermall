<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name:"TabBarItem",
		props:{
			path: String,
			activeColor:{
				type:String,
				default: '#ff4040'
			}
		},
		computed:{
			isActive(){//控制显示 slot，展示不同图片
				return this.$route.path.indexOf(this.path) !==  -1;
			},
			activeStyle(){//控制显示不同文字样式
				return this.isActive? {color:this.activeColor}:{};
			}
		},
		methods:{
			itemClick(){
			  if (this.$route.path != this.path) {
					this.$router.replace(this.path)
			  }
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item{
	  flex:1;
	  height: 49px;
	  padding-top: 1px;
	  box-sizing: border-box;
	  text-align: center;
    font-size: 14px;
	}
  .tab-bar-item img{
    vertical-align: middle;
    width: 28px;
    height: 28px;
  }
</style>