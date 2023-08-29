import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import Modal from '@/components/modal/modal.vue'

export default defineComponent({
	name: 'LoginPage',
	components: {
		Modal,
	},
	setup() {
		return { v$: useVuelidate() }
	},
	data() {
		return {
			isValid: true,
			form: {
				email: '',
				password: '',
			},
			isFormSubmitting: false,
			errorMessage: '',
		}
	},
	validations() {
		return {
			form: {
				email: {
					required,
				},
				password: {
					required,
					min: minLength(8),
				},
			},
		}
	},
	head: {
		title: {
			inner: 'Login',
		},
	},
	created() {
		document.body.classList.add('bg-gradient-primary')
	},
	methods: {
		...mapActions({
			login: 'auth/login',
		}),
		async submit() {
			try {
				await this.login(this.form)
				this.$router.push({ name: 'Dashboard' })
			} catch (error: any) {
				this.errorMessage = error.response.data.message
			}
		},
	},
})
