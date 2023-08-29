<template>
	<div class="container">
		<!-- Outer Row -->
		<div class="row justify-content-center">
			<div class="col-xl-10 col-lg-12 col-md-9">
				<div class="card o-hidden border-0 shadow-lg my-5">
					<div class="card-body p-0">
						<!-- Nested Row within Card Body -->
						<div class="row">
							<div
								class="col-lg-6 d-none d-lg-block bg-login-image"
							></div>
							<div class="col-lg-6">
								<div class="p-5">
									<div class="text-center">
										<h1 class="h4 text-gray-900 mb-4">
											Welcome Back!
										</h1>
									</div>
									<div
										v-if="errorMessage"
										class="card bg-danger text-white shadow error-msg"
									>
										<div class="card-body">
											{{ errorMessage }}
											<div class="text-white-50 small">
												Please enter your correct
												credentials.
											</div>
										</div>
									</div>
									<form
										lazy-validation
										class="user"
										@submit.stop.prevent="submit"
									>
										<div class="form-group">
											<input
												id="exampleInputEmail"
												v-model="v$.form.email.$model"
												type="email"
												class="form-control form-control-user"
												aria-describedby="emailHelp"
												placeholder="Enter Email Address..."
											/>
											<div
												v-for="(error, index) of v$.form
													.email.$errors"
												:key="index"
												class="input-errors"
											>
												<div class="error-msg">
													{{ error.$message }}
												</div>
											</div>
										</div>
										<div class="form-group">
											<input
												id="exampleInputPassword"
												v-model="
													v$.form.password.$model
												"
												type="password"
												class="form-control form-control-user"
												placeholder="Password"
											/>
											<div
												v-for="(error, index) of v$.form
													.password.$errors"
												:key="index"
												class="input-errors"
											>
												<div class="error-msg">
													{{ error.$message }}
												</div>
											</div>
										</div>
										<div class="form-group">
											<div
												class="custom-control custom-checkbox small"
											>
												<input
													id="customCheck"
													type="checkbox"
													class="custom-control-input"
												/>
												<label
													class="custom-control-label"
													for="customCheck"
													>Remember Me</label
												>
											</div>
										</div>
										<button
											:disabled="v$.form.$invalid"
											type="submit"
											class="btn btn-primary btn-user btn-block"
										>
											LOGIN
										</button>
									</form>
									<hr />
									<div class="text-center">
										<a
											class="small"
											href="forgot-password.html"
											>Forgot Password?</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
.error-msg {
	font-size: 14px;
	margin: 0 0 20px;

	.card-body {
		padding: 15px;
	}
}
</style>
