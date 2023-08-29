import api from '@/api'
import _ from 'lodash'

const initialState = () => ({
	user: {} as any,
})

export default {
	namespaced: true,
	state: initialState(),
	getters: {},
	mutations: {
		BLANK_COMMIT: () => {
			console.log('commit')
		},
	},
	actions: {
		getPhotos: async ({ commit }: { commit: any }, albumId: any) => {
			try {
				const photosResponse = await api.get(
					`/api/album/get/${albumId}`
				)
				return _.get(photosResponse, 'data.result.data')
				// eslint-disable-next-line no-useless-catch
			} catch (error) {
				throw error
			} finally {
				commit('BLANK_COMMIT')
			}
		},
	},
}
