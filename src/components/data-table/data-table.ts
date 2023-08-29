import { PropType, defineComponent } from 'vue'

export default defineComponent({
	name: 'DataTableComponent',
	props: {
		headers: {
			type: [] as PropType<[]>,
			required: false,
			default: [],
		},
		data: {
			type: [] as PropType<[]>,
			required: false,
			default: [],
		},
	},
	methods: {},
})
