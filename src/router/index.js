import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = _=>import("views/home/Home")
const Sort = _=>import("views/sort/Sort")
const Cart = _=>import("views/cart/Cart")
const Profile = _=>import("views/profile/Profile")


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: "首页"
		}
	},
	{
		path: '/sort',
		component: Sort,
		meta: {
			title: "分类"
		}
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			title: "购物车"
		}
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			title: "我的"
		}
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active'
})

export default router