<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image">
				<p>{{item.title}}</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default(){
					return []
				}
			}
		},
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		overflow: hidden;

		width: 100%;
		padding: 10px 0 15px;
		border-bottom: 10px solid #eee;

		text-align: center;
		font-size: 12px;
	}
	.recommend-item {
		flex:1;
	}
	a {
		display: block;
	}
	img {
		vertical-align:bottom;
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>
