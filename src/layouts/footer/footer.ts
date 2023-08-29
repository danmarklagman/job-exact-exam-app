import { defineComponent } from 'vue'
import store from '@/store'

export default defineComponent({
	name: 'FooterComponent',
	data() {
		return {
			isAuthenticated: false,
		}
	},
	mounted() {
		this.isAuthenticated = store.getters['auth/isAuthenticated']
	},
	methods: {
		backToTop() {
			window.scrollTo(0, 0)
		},
	},
})
