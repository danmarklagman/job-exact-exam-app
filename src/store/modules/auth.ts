import _ from 'lodash'
import _get from 'lodash/get'
import cookies from 'js-cookie'
import api from '@/api'

const initialState = () => ({
	auth_token: {},
	user: {},
})

export default {
	namespaced: true,
	state: initialState(),
	getters: {
		isAuthenticated: (state: any) => !_.isEmpty(state.access_token),
		id: (state: any) => _get(state, 'user.id', null),
		username: (state: any) => _get(state, 'user.username', null),
		email: (state: any) => _get(state, 'user.email', null),
		name: (state: any) => _get(state, 'user.name', null),
		phone: (state: any) => _get(state, 'user.phone', null),
		website: (state: any) => _get(state, 'user.website', null),
		address: (state: any) => _get(state, 'address.birth_date', null),
		company: (state: any) => _get(state, 'user.company', null),
	},
	mutations: {
		SET_ACCESS_TOKEN: (
			state: any,
			{ access_token }: { access_token: any }
		) => {
			if (!access_token) {
				return
			}

			cookies.set('access_token', JSON.stringify(access_token))
			cookies.set('logged_in', '1')

			state.access_token = access_token
		},
		SET_CURRENT_USER: (state: any, { user }: { user: any }) => {
			cookies.set('user', JSON.stringify(user))

			state.user = user
		},
		INVALIDATE_ACCESS_TOKEN: (state: any) => {
			_.each(cookies.get(), (item, index) => cookies.remove(index))
			_.each(initialState(), (item, index) => (state[index] = item))
		},
	},
	actions: {
		login: async ({ commit }: { commit: any }, payload: any) => {
			// eslint-disable-next-line no-useless-catch
			try {
				const authenticationResponse = await api.post(
					'/api/auth/login',
					payload
				)

				const user = _.get(authenticationResponse, 'data.result.data')

				const { access_token } = _.get(
					authenticationResponse,
					'data.result.data'
				)
				console.log(access_token)

				commit('SET_ACCESS_TOKEN', {
					access_token: {
						access_token,
					},
				})

				return user
			} catch (error) {
				throw error
			}
		},
		initCsrfToken: async () => {
			// eslint-disable-next-line no-useless-catch
			try {
				await api.get('/sanctum/csrf-cookie')
			} catch (error) {
				throw error
			}
		},
		currentUser: async ({ commit }: { commit: any }) => {
			// eslint-disable-next-line no-useless-catch
			try {
				const currentUserResponse = await api.get('/api/user/me')
				const user = _.get(currentUserResponse, 'data.result.data')

				commit('SET_CURRENT_USER', { user })

				return currentUserResponse
			} catch (error) {
				throw error
			}
		},
		logout: async ({ commit }: { commit: any }) => {
			try {
				return await api.post('/api/auth/logout')
				// eslint-disable-next-line no-useless-catch
			} catch (error) {
				throw error
			} finally {
				commit('INVALIDATE_AUTH_TOKEN')
			}
		},
	},
}
