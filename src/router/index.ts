import { createRouter, createWebHistory } from 'vue-router'
import _ from 'lodash'
import cookies from 'js-cookie'
import routes from './routes'
import store from '@/store'
import config from '@/config'
import EventBus from '@/components/event-bus/event-bus'

const router = createRouter({
	history: createWebHistory(''),
	routes,
	linkActiveClass: 'active',
})

/**
 * Creates a `nextMiddleware()` function which not only runs the default `next()` callback but also triggers the `subsequentMiddleware()`.
 *
 * @param context
 * @param middleware
 * @param index
 * @returns {(function(...[*]=))|*}
 */
function nextFactory(context: any, middleware: any, index: any) {
	const subsequentMiddleware = middleware[index]

	// If no subsequent Middleware exists, the default `next()` callback is returned.
	if (!subsequentMiddleware) {
		return context.next
	}

	return (...parameters: any[]) => {
		_.each(parameters, (item) => {
			// If set in `next({ force: true })`.
			if (item.force) {
				context.next(item)
			}
		})

		/**
		 * Then run the `subsequentMiddleware()` with a new `nextMiddleware()` callback.
		 * @type {function(...[*]=)}
		 */
		const nextMiddleware = nextFactory(context, middleware, index + 1)

		subsequentMiddleware({ ...context, next: nextMiddleware })
	}
}

/**
 * Process middleware.
 *
 * @param from
 * @param to
 * @param next
 * @param middleware
 * @returns {*}
 */
function processMiddleware(from: any, to: any, next: any, middleware: any) {
	const context = { router, from, to, next }
	const nextMiddleware = nextFactory(context, middleware, 1)

	return middleware[0]({ ...context, next: nextMiddleware })
}

/**
 * Navigate route.
 *
 * @param to
 * @param from
 * @param next
 * @returns {*}
 */
function navigate(to: any, from: any, next: any) {
	if (to.meta.middleware) {
		return processMiddleware(from, to, next, _.concat(to.meta.middleware))
	}

	to.matched.some((matched: any) => {
		if (matched.meta.middleware) {
			return processMiddleware(
				from,
				to,
				next,
				_.concat(matched.meta.middleware)
			)
		}
	})

	return next()
}

/**
 * Global navigation guards.
 */
router.beforeEach((to, from, next) => {
	const accessToken = cookies.get('access_token')
		? JSON.parse(cookies.get('access_token')!)
		: {}
	const user = cookies.get('user') ? JSON.parse(cookies.get('user')!) : {}

	if (!_.isEmpty(accessToken)) {
		store.commit('auth/SET_ACCESS_TOKEN', { access_token: accessToken })

		if (_.isEmpty(user)) {
			store
				.dispatch('auth/currentUser')
				.then((response) => {
					if (config.debug) {
						console.info(response)
					}
				})
				.catch((error) => {
					if (config.debug) {
						console.info(error.response)
					}
				})
		} else {
			store.commit('auth/SET_CURRENT_USER', { user })
		}
	}

	// if (typeof to.matched[0]?.components.default === 'function') {
	EventBus.emit('asyncComponentLoading', to) // Start progress bar
	// }

	// document.documentElement.style.scrollBehavior = 'auto'
	// setTimeout(() => window.scrollTo(0, 0), 5)
	// setTimeout(
	// 	() => (document.documentElement.style.scrollBehavior = 'smooth'),
	// 	5
	// )

	navigate(to, from, next)
})

router.beforeResolve((to, from, next) => {
	EventBus.emit('asyncComponentLoaded') // Stop progress bar
	next()
})

export default router
