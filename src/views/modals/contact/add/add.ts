import { defineComponent } from 'vue'
import useVuelidate from '@vuelidate/core'
import { useToast } from 'vue-toastification'
import Modal from '@/components/modal/modal.vue'
import { required } from '@vuelidate/validators'
import { mapActions } from 'vuex'

export default defineComponent({
	name: 'AddContactModal',
	components: {
		Modal,
	},
	setup() {
		const toast = useToast()
		return { v$: useVuelidate(), toast }
	},
	data() {
		return {
			isValid: true,
			form: {
				username: '',
				name: '',
				email: '',
				phone: '',
				website: '',
				suite: '',
				street: '',
				city: '',
				zip_code: '',
				company_name: '',
				company_bs: '',
				company_catch_phrase: '',
			},
			isFormSubmitting: false,
			errorMessage: '',
		}
	},
	validations() {
		return {
			form: {
				username: {
					required,
				},
				name: {
					required,
				},
				email: {
					required,
				},
				phone: {},
				website: {},
				suite: {},
				street: {},
				city: {},
				zip_code: {},
				company_name: {},
				company_bs: {},
				company_catch_phrase: {},
			},
		}
	},
	created() {
		this.emitter.on('ModalOpenEvent', () =>
			($('#modal') as any).modal('show')
		)

		this.emitter.on('ModalCloseEvent', () =>
			($('#modal') as any).modal('hide')
		)

		this.emitter.on('ModalSubmitEvent', () => this.didSubmit())
	},
	methods: {
		...mapActions({
			create: 'contact/create',
		}),
		didCloseModal() {
			this.emitter.emit('ModalCloseEvent', true)
		},
		didSubmitModal() {
			this.emitter.emit('ModalSubmitEvent', true)
		},
		async didSubmit() {
			try {
				const payload = {
					name: this.form.name,
					username: this.form.username,
					email: this.form.email,
					phone: this.form.phone,
					website: this.form.website,
					address: JSON.stringify({
						suite: this.form.suite,
						street: this.form.street,
						city: this.form.city,
						zip_code: this.form.zip_code,
					}),
					company: JSON.stringify({
						name: this.form.company_name,
						bs: this.form.company_bs,
						catch_phrase: this.form.company_catch_phrase,
					}),
				}
				const user = await this.create(payload)
				this.emitter.emit('UserCreatedEvent', user)
				this.emitter.emit('ModalCloseEvent', true)
				this.$refs.addContactForm.reset()
			} catch (error: any) {
				this.errorMessage = error.response.data.message
			}
		},
	},
})
