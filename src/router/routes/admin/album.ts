export default {
	path: 'albums/',
	name: 'Album',
	component: () =>
		import(
			/* webpackChunkName: "contact" */ '@/views/pages/admin/album/album.vue'
		),
	children: [
		{
			path: 'view/:id',
			name: 'AlbumView',
			component: () =>
				import(
					/* webpackChunkName: "album-view" */ '@/views/pages/admin/album/view/view.vue'
				),
		},
	],
}
