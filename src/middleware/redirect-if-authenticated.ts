import store from '@/store'

const redirectIfAuthenticated = ({
	router,
	to,
	next,
}: {
	router: any
	to: any
	next: any
}) => {
	if (store.getters['auth/isAuthenticated'] && to.name === 'LogIn') {
		return router.push({
			name: 'Admin',
		})
	}

	if (!store.getters['auth/isAuthenticated'] && to.name !== 'LogIn') {
		return router.push({
			name: 'LogIn',
		})
	}

	return next()
}

export default redirectIfAuthenticated
