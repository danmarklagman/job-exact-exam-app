import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import PageTopbarComponent from '@/components/page-topbar/page-topbar.vue'
import Modal from '@/components/modal/modal.vue'

export default defineComponent({
	name: 'AlbumViewPage',
	components: {
		PageTopbarComponent,
		Modal,
	},
	data() {
		return {
			album: null as any,
			photos: [] as any[],
			selectedImage: null as any,
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
		await this.getAlbumPhotos()

		this.emitter.on('ModalCloseEvent', () =>
			($('#modal') as any).modal('hide')
		)
	},
	methods: {
		...mapActions({
			getPhotos: 'album/getPhotos',
		}),
		async getAlbumPhotos() {
			try {
				const album = await this.getPhotos(
					this.$router.currentRoute.value.params.id
				)
				this.album = album
				this.photos = album.photos
			} catch (error: any) {
				console.error(error)
			}
		},
		didNavigateToContact() {
			this.$router.push({
				name: 'ContactView',
				params: {
					id: this.$router.currentRoute.value.query.userId,
				},
			})
		},
		didClickImage(image: any) {
			this.selectedImage = image
			$('#modal').modal('show')
		},
	},
})
