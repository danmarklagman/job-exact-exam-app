<template>
	<PageTopbarComponent :has-searchbar="false" :title="contact?.name">
		<template #action>
			<!-- Nav Item - User Information -->
			<li class="nav-item dropdown no-arrow">
				<button
					type="button"
					class="btn btn-light btn-icon-split"
					@click="didNavigateToContacts()"
				>
					<span class="icon text-white-50">
						<i class="fas fa-chevron-left"></i>
					</span>
					<span class="text">Back to Contacts</span>
				</button>
			</li>
		</template>
	</PageTopbarComponent>

	<div class="container-fluid">
		<div class="mt-4">
			<div class="card mb-4">
				<div class="card-header py-3">
					<h6 class="m-0 font-weight-bold text-primary">
						Contact Info
					</h6>
				</div>
				<div class="card-body">
					<table class="table-contact-info">
						<tr>
							<td><span class="text-gray-600">Name:</span></td>
							<td>{{ contact?.name }}</td>
						</tr>
						<tr>
							<td>
								<span class="text-gray-600">Username:</span>
							</td>
							<td>{{ contact?.username }}</td>
						</tr>
						<tr>
							<td><span class="text-gray-600">Email:</span>:</td>
							<td>{{ contact?.email }}</td>
						</tr>
						<tr>
							<td><span class="text-gray-600">Phone:</span>:</td>
							<td>{{ contact?.phone }}</td>
						</tr>
						<tr>
							<td>
								<span class="text-gray-600">Website:</span>:
							</td>
							<td>
								<a
									:href="'//' + contact?.website"
									target="_blank"
									>{{ contact?.website }}</a
								>
							</td>
						</tr>
						<tr>
							<td>Address:</td>
							<td>
								<span v-if="contact?.address.suite"
									>{{ contact?.address.suite }},
								</span>
								<span v-if="contact?.address.street"
									>{{ contact?.address.street }},
								</span>
								<span v-if="contact?.address.city"
									>{{ contact?.address.city }},
								</span>
								<span v-if="contact?.address.zip_code">{{
									contact?.address.zip_code
								}}</span>
							</td>
						</tr>
						<tr>
							<td>Company:</td>
							<td>{{ contact?.company.name }}</td>
						</tr>
					</table>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-header py-3">
					<h6 class="m-0 font-weight-bold text-primary">
						Contact Gallery
					</h6>
				</div>
				<div class="card-body">
					<div
						v-if="contact?.albums.length > 0"
						class="album-container"
					>
						<div
							v-for="album of contact?.albums"
							:key="album?.id"
							class="card"
							style="width: 18rem"
							@click="didOpenAlbum(album?.id)"
						>
							<img
								:src="album?.r_photos[0].thumbnail"
								class="card-img-top"
								:alt="album?.title"
							/>
							<div class="card-body">
								<p class="card-text">
									{{ album?.title }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./view.ts"></script>

<style lang="scss" scoped>
.table-contact-info {
	tr {
		td {
			padding: 2px 7px 2px 0;
		}
	}
}

.album-container > div {
	display: inline-block;
	vertical-align: top;
	margin: 10px;
}
</style>
