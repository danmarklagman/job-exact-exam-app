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
			contact: null,
		}
	},
	head: {
		title: {
			inner: 'View - Contacts',
		},
	},
	validations() {
		return {}
	},
	computed: {
		...mapGetters({}),
	},
	async created() {
		await this.getContact()
	},
	methods: {
		...mapActions({
			findBy: 'contact/findBy',
		}),
		async getContact() {
			try {
				this.contact = await this.findBy(
					this.$router.currentRoute.value.params.id
				)
			} catch (error: any) {
				console.error(error)
			}
		},
		didNavigateToContacts() {
			this.$router.push({
				name: 'ContactList',
			})
		},
		didOpenAlbum(id: string) {
			this.$router.push({
				name: 'AlbumView',
				params: {
					id: id,
				},
				query: {
					userId: this.$router.currentRoute.value.params.id,
				},
			})
		},
	},
})
