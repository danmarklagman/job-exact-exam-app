import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HeaderComponent',

	data() {
		return {
			isAuthenticated: false,
		}
	},
	methods: {
		didToggleSidebar(event: any) {
			event.preventDefault()
			this.emitter.emit('ToggleSidebarEvent', true)
		},
	},
})
