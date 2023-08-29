export default {
	path: 'login',
	name: 'LogIn',
	component: () =>
		import(
			/* webpackChunkName: "log-in" */ '@/views/pages/login/login.vue'
		),
}
