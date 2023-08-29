<template>
	<!-- Page Wrapper -->
	<div id="wrapper">
		<SidebarComponent />

		<!-- Content Wrapper -->
		<div id="content-wrapper" class="d-flex flex-column">
			<!-- Main Content -->
			<div id="content">
				<HeaderComponent />

				<!-- Begin Page Content -->
				<router-view />
				<!-- /.container-fluid -->
			</div>
			<!-- End of Main Content -->

			<FooterComponent />
		</div>
		<!-- End of Content Wrapper -->
	</div>
	<!-- End of Page Wrapper -->

	<!-- Scroll to Top Button-->
	<a class="scroll-to-top rounded" href="#page-top">
		<i class="fas fa-angle-up"></i>
	</a>
</template>

<script lang="ts" src="./admin.ts"></script>
