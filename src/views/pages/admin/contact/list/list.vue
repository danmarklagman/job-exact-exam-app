<template>
	<PageTopbarComponent :has-searchbar="true" :title="'Contacts'">
		<template #action>
			<!-- Nav Item - User Information -->
			<li class="nav-item dropdown no-arrow">
				<button
					type="button"
					class="btn btn-primary btn-icon-split"
					@click="didOpenModal()"
				>
					<span class="icon text-white-50">
						<i class="fas fa-user-plus"></i>
					</span>
					<span class="text">Add Contact</span>
				</button>
			</li>
		</template>
	</PageTopbarComponent>

	<div class="container-fluid">
		<div class="mt-4">
			<!-- DataTales Example -->
			<div class="card shadow mb-4">
				<div class="card-header py-3">
					<h6 class="m-0 font-weight-bold text-primary">
						DataTables Example
					</h6>
				</div>
				<div class="card-body">
					<div class="table-responsive">
						<table
							id="dataTable"
							class="table table-bordered"
							width="100%"
							cellspacing="0"
						>
							<thead>
								<tr>
									<th v-for="header of headers" :key="header">
										{{ header }}
									</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(contact, index) of contacts"
									:key="contact?.id"
								>
									<td>{{ index }}</td>
									<td>{{ contact?.name }}</td>
									<td>{{ contact?.phone }}</td>
									<td>
										<a
											:href="'//' + contact?.website"
											target="_blank"
											>{{ contact?.website }}</a
										>
									</td>
									<td>
										{{ getCompanyName(contact?.company) }}
									</td>
									<td class="data-actions">
										<button
											type="button"
											class="btn btn-outline-primary btn-icon btn-sm"
											title="View"
											@click="didViewUser(contact?.id)"
										>
											<i class="fas fa-eye"></i>
										</button>
										<button
											type="button"
											class="btn btn-outline-warning btn-icon btn-sm"
											title="Edit"
										>
											<i class="fas fa-pen"></i>
										</button>
										<button
											type="button"
											class="btn btn-outline-danger btn-icon btn-sm"
											title="Delete"
										>
											<i class="fas fa-trash"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

	<AddContactModal />
</template>

<script lang="ts" src="./list.ts"></script>

<style lang="scss" scoped>
.data-actions {
	button {
		margin-right: 5px;
	}
}
</style>
