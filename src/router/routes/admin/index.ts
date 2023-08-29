import _concat from 'lodash/concat'
import redirectIfAuthenticated from '@/middleware/redirect-if-authenticated'
import dashboard from './dashboard'
import contact from './contact'
import album from './album'

export default {
	path: '/',
	name: 'Admin',
	redirect: '/dashboard',
	component: () =>
		import(/* webpackChunkName: "admin" */ '@/layouts/admin/admin.vue'),
	children: _concat(dashboard, contact, album),
	meta: {
		middleware: [redirectIfAuthenticated],
	},
}
