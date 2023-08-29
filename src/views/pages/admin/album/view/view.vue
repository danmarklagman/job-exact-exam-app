<template>
	<PageTopbarComponent :has-searchbar="false" :title="'Gallery Photos'">
		<template #action>
			<!-- Nav Item - User Information -->
			<li class="nav-item dropdown no-arrow">
				<button
					type="button"
					class="btn btn-light btn-icon-split"
					@click="didNavigateToContact()"
				>
					<span class="icon text-white-50">
						<i class="fas fa-chevron-left"></i>
					</span>
					<span class="text">Back to Contact</span>
				</button>
			</li>
		</template>
	</PageTopbarComponent>

	<div class="container-fluid">
		<div class="mt-4">
			<div class="card mb-4">
				<div class="card-header py-3">
					<h6 class="m-0 font-weight-bold text-primary">
						Gallery Photos
					</h6>
				</div>
				<div class="card-body">
					<p>{{ album?.title }}</p>
					<div class="photos-container">
						<img
							v-for="photo of photos"
							:key="photo?.id"
							:src="photo?.thumbnail"
							class="img-thumbnail"
							:alt="photo?.thumbnail"
							@click="didClickImage(photo)"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<Modal :has-submit-button="false">
		<template #body>
			<div class="text-center">
				<img
					v-if="selectedImage"
					:src="selectedImage?.full"
					:alt="selectedImage?.title"
				/>
			</div>
		</template>
	</Modal>
</template>

<script lang="ts" src="./view.ts"></script>

<style lang="scss" scoped>
.photos-container {
	img {
		margin: 10px;
	}
}
</style>
