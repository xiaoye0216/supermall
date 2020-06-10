<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_on.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <img slot="item-icon" src="~assets/img/tabbar/sort.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/sort_on.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_on.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_on.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>

<style></style>