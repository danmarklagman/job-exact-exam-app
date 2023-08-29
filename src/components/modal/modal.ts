import { PropType } from 'vue'

export default {
	name: 'Modal',
	props: {
		title: String as PropType<string>,
		hasSubmitButton: Boolean as PropType<boolean>,
	},
	methods: {
		didCloseModal() {
			this.emitter.emit('ModalCloseEvent', true)
		},
		didSubmitModal() {
			this.emitter.emit('ModalSubmitEvent', true)
		},
	},
}
