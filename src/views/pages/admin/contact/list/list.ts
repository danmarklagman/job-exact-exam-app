import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import PageTopbarComponent from '@/components/page-topbar/page-topbar.vue'
import AddContactModal from '../../../../modals/contact/add/add.vue'

export default defineComponent({
	name: 'ContactListPage',
	components: {
		PageTopbarComponent,
		AddContactModal,
	},
	data() {
		return {
			headers: [] as any[],
			contacts: [] as any[],
		}
	},
	head: {
		title: {
			inner: 'List - Contacts',
		},
	},
	validations() {
		return {}
	},
	computed: {
		...mapGetters({}),
	},
	created() {
		this.headers = ['#', 'Name', 'Phone', 'Website', 'Company Name']
		this.getAllContacts()

		this.emitter.on('UserCreatedEvent', (contact: any) =>
			this.contacts.push(contact)
		)
	},
	methods: {
		...mapActions({
			getAll: 'contact/getAll',
		}),
		async getAllContacts() {
			this.contacts = await this.getAll()
		},
		getCompanyName(company: any) {
			return JSON.parse(company).name
		},
		didOpenModal() {
			this.emitter.emit('ModalOpenEvent', true)
		},
		didViewUser(id: string) {
			this.$router.push({
				name: 'ContactView',
				params: {
					id: id,
				},
			})
		},
	},
})
