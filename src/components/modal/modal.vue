<template>
	<div id="modal" class="modal fade" tabindex="-1">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{ title }}</h5>
				</div>
				<div class="modal-body">
					<slot name="body"></slot>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary btn-icon-split"
						@click="didCloseModal()"
					>
						<span class="icon text-white-50">
							<i class="fas fa-arrow-right"></i>
						</span>
						<span class="text">Close</span>
					</button>
					<button
						v-if="hasSubmitButton"
						type="button"
						class="btn btn-success btn-icon-split"
						@click="didSubmitModal()"
					>
						<span class="icon text-white-50">
							<i class="fas fa-check"></i>
						</span>
						<span class="text">Submit</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./modal.ts"></script>

<style></style>
