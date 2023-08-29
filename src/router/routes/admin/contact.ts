export default {
	path: 'contacts/',
	name: 'Contact',
	redirect: 'contacts/list',
	component: () =>
		import(
			/* webpackChunkName: "contact" */ '@/views/pages/admin/contact/contact.vue'
		),
	children: [
		{
			path: 'list',
			name: 'ContactList',
			component: () =>
				import(
					/* webpackChunkName: "contact-list" */ '@/views/pages/admin/contact/list/list.vue'
				),
		},
		{
			path: 'view/:id',
			name: 'ContactView',
			component: () =>
				import(
					/* webpackChunkName: "contact-view" */ '@/views/pages/admin/contact/view/view.vue'
				),
		},
	],
}
