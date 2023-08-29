import _concat from 'lodash/concat'
import login from './login'
import redirectIfAuthenticated from '@/middleware/redirect-if-authenticated'

export default {
	path: '/auth',
	component: () => import('@/layouts/auth/auth.vue'),
	children: _concat(login),
	meta: {
		middleware: [redirectIfAuthenticated],
	},
}
