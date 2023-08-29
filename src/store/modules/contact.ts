import api from '@/api'
import _get from 'lodash/get'
import _ from 'lodash'

const initialState = () => ({
	user: {} as any,
})

export default {
	namespaced: true,
	state: initialState(),
	getters: {
		contacts: (state: any) => _get(state, 'contacts', {}),
	},
	mutations: {
		SET_CONTACTS: (state: any, { contacts }: { contacts: any }) => {
			state.contacts = contacts
		},
		BLANK_COMMIT: () => {
			console.log('commit')
		},
	},
	actions: {
		getAll: async ({ commit }: { commit: any }) => {
			// eslint-disable-next-line no-useless-catch
			try {
				const allUsersResponse = await api.get('/api/user')
				const contacts = _.get(allUsersResponse, 'data.result.data')

				commit('SET_CONTACTS', { contacts })

				return contacts
			} catch (error) {
				throw error
			}
		},
		findBy: async ({ commit }: { commit: any }, parameter: any) => {
			try {
				const userResponse = await api.get(`/api/user/get/${parameter}`)
				return _.get(userResponse, 'data.result.data')
				// eslint-disable-next-line no-useless-catch
			} catch (error) {
				throw error
			} finally {
				commit('BLANK_COMMIT')
			}
		},
		create: async ({ commit }: { commit: any }, payload: any) => {
			try {
				const createUserResponse = await api.post('/api/user', payload)

				return _.get(createUserResponse, 'data.result.data')
				// eslint-disable-next-line no-useless-catch
			} catch (error) {
				throw error
			} finally {
				commit('BLANK_COMMIT')
			}
		},
	},
}
