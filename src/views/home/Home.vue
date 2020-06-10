<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" :key="bannersLength" />
    <recommend-view :recommends="recommends" :key="recommendsLength" />
    <feature-view />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata} from 'network/home'


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    data(){
    	return{
        banners:[],
        recommends:[],
    	}
    },
    computed:{
      bannersLength(){
        return 'h_b'+this.banners.length;
      },
      recommendsLength(){
        return 'h_r'+this.recommends.length;
      }
    },
    created(){
      this.getHomeMultidata();
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
