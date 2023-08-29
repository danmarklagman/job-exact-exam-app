<template>
	<Modal :title="'Add Contact'" :has-submit-button="true">
		<template #body>
			<form
				ref="addContactForm"
				class="row g-3 needs-validation"
				lazy-validation
				@submit.stop.prevent="didSubmit"
			>
				<div class="col-md-12">
					<label class="form-label">Name</label>
					<input
						v-model="v$.form.name.$model"
						type="text"
						class="form-control has-validation"
					/>
					<div class="invalid-feedback">
						Please choose a username.
					</div>
				</div>
				<div class="col-md-6">
					<label class="form-label">Username</label>
					<input
						v-model="v$.form.username.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">Email</label>
					<input
						v-model="v$.form.email.$model"
						type="email"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">Phone</label>
					<input
						v-model="v$.form.phone.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">Website</label>
					<input
						v-model="v$.form.website.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-6">
					<label class="form-label">Suite</label>
					<input
						v-model="v$.form.suite.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-6">
					<label class="form-label">Street</label>
					<input
						v-model="v$.form.street.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">City</label>
					<input
						v-model="v$.form.city.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">Zip Code</label>
					<input
						v-model="v$.form.zip_code.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-12">
					<label class="form-label">Company Name</label>
					<input
						v-model="v$.form.company_name.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">Company BS</label>
					<input
						v-model="v$.form.company_bs.$model"
						type="text"
						class="form-control"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label">Company Catch Phrase</label>
					<textarea
						v-model="v$.form.company_catch_phrase.$model"
						type="text"
						class="form-control"
					>
					</textarea>
				</div>
			</form>
		</template>
	</Modal>
</template>

<script lang="ts" src="./add.ts"></script>
