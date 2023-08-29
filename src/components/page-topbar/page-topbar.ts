/* eslint-disable vue/require-default-prop */
import { PropType, defineComponent } from 'vue'

export default defineComponent({
	name: 'PageTopbarComponent',
	props: {
		hasSearchbar: Boolean as PropType<boolean>,
		title: String as PropType<string>,
	},
	methods: {},
})
