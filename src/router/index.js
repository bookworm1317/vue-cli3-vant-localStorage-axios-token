import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Login = () => import('@/views/Login')
const page404 = () => import('@/views/page404.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
// meta: {
//   isOpen: true // 默认所有页面都是要权限的,配置isOpen:true 设置无需权限访问
// }
const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		meta: {
			title: '主页',
			//isOpen:true
		},
		component: Home
	},
	{
		path: '/category',
		component: Category,
		meta: {
			title: '个人中心'
		},
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			title: '购物车'
		},
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			title: '个人中心'
		},
	},
	{
		path: '/detail/:iid',
		component: Detail,
		meta: {
			title: '详情'
		},
	},
	{
		path: '/login',
		meta: {
			title: '登录',
			isOpen: true
		},
		component: Login
	},
	{
		path: '*',
		name: 'page404',
		meta: {
			title: '页面未找到'
		},
		component: page404
	}
]
const router = new VueRouter({
	routes,
	//mode: 'history'
})


export default router
