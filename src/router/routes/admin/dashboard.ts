export default {
	path: 'dashboard',
	name: 'Dashboard',
	component: () =>
		import(
			/* webpackChunkName: "dashboard" */ '@/views/pages/admin/dashboard/dashboard.vue'
		),
}
