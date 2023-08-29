import { defineComponent } from 'vue'
import random from 'lodash.random'
import EventBus from '@/components/event-bus/event-bus'

export default defineComponent({
	name: 'ProgressBarComponent',
	data() {
		return {
			isLoading: true, // Once loading is done, start fading away
			isVisible: false, // Once animate finish, set display: none
			progress: this.startingPoint as any,
			timeoutId: undefined as any,
			defaultDuration: 8000 as any,
			defaultInterval: 1000 as any,
			variation: 0.5 as any,
			startingPoint: 0 as any,
			endingPoint: 90 as any,
		}
	},
	mounted() {
		EventBus.addEventListener('asyncComponentLoading', this.start)
		EventBus.addEventListener('asyncComponentLoaded', this.stop)
	},
	methods: {
		start() {
			this.isLoading = true
			this.isVisible = true
			this.progress = this.startingPoint
			this.loop()
		},
		loop() {
			if (this.timeoutId) {
				clearTimeout(this.timeoutId)
			}
			if (this.progress >= this.endingPoint) {
				return
			}
			const size =
				(this.endingPoint - this.startingPoint) /
				(this.defaultDuration / this.defaultInterval)
			const p = Math.round(
				this.progress +
					random(
						size * (1 - this.variation),
						size * (1 + this.variation)
					)
			)
			this.progress = Math.min(p, this.endingPoint)
			this.timeoutId = setTimeout(
				this.loop,
				random(
					this.defaultInterval * (1 - this.variation),
					this.defaultInterval * (1 + this.variation)
				)
			)
		},
		stop() {
			this.isLoading = false
			this.progress = 100
			clearTimeout(this.timeoutId)
			setTimeout(() => {
				if (!this.isLoading) {
					this.isVisible = false
				}
			}, 200)
		},
	},
})
