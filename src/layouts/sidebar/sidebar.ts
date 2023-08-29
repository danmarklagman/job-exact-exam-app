import { defineComponent } from 'vue'
import useVuelidate from '@vuelidate/core'

export default defineComponent({
	name: 'SidebarComponent',
	components: {},
	setup() {
		return { v$: useVuelidate() }
	},
	data() {
		return {}
	},
	validations() {
		return {}
	},
	created() {
		this.emitter.on('ToggleSidebarEvent', () =>
			document.body.classList.toggle('sb-sidenav-toggled')
		)
	},
	methods: {},
})
