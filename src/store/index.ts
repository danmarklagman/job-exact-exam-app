import { createStore } from 'vuex'
import config from '@/config'
import auth from './modules/auth'
import contact from './modules/contact'
import album from './modules/album'

const store = createStore({
	state: {
		config,
	},
	mutations: {},
	actions: {},
	modules: {
		auth,
		contact,
		album,
	},
})

export default store
