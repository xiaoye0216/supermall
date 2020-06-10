<template>
  <div>
  	<h2>我的</h2>
  	<p>这是我的界面</p>
  	<!-- <p>用户ID:{{user.id}}</p>
  	<p>用户姓名:{{user.name}}</p> -->
  </div>
</template>

<script>

export default {
  name: 'Profile',
  computed: {
  	userID(){
  		return this.$route.params.userID;
  	}
  }
}
</script>

<style scoped>
</style>
