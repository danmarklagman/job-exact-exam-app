import { defineComponent } from 'vue'
import HeaderComponent from '../header/header.vue'
import SidebarComponent from '../sidebar/sidebar.vue'
import FooterComponent from '../footer/footer.vue'

export default defineComponent({
	name: 'AdminLayout',
	components: { HeaderComponent, SidebarComponent, FooterComponent },
})
