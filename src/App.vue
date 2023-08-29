<template>
	<ProgressBarComponent />
	<router-view :key="$route.fullPath"></router-view>
</template>

<script lang="ts">
import { loadScript } from 'vue-plugin-load-script'
import ProgressBarComponent from '@/components/progress-bar/progress-bar.vue'
import { mapActions } from 'vuex'

export default {
	components: {
		ProgressBarComponent,
	},
	watch: {
		$route: async function () {
			await loadScript('/vendor/jquery/jquery.min.js')
			await loadScript('/vendor/bootstrap/js/bootstrap.bundle.min.js')
			await loadScript('/vendor/jquery-easing/jquery.easing.min.js')
			await loadScript('/js/sb-admin-2.min.js')
			this.$forceUpdate()
		},
	},
	async created() {
		await this.initCsrfToken()
	},
	methods: {
		...mapActions({
			initCsrfToken: 'auth/initCsrfToken',
		}),
	},
}
</script>

<style lang="scss" scoped></style>
