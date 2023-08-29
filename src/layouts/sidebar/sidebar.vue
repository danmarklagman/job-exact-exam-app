<template>
	<!-- Sidebar -->
	<ul
		id="accordionSidebar"
		class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
	>
		<!-- Sidebar - Brand -->
		<a
			class="sidebar-brand d-flex align-items-center justify-content-center"
			href="index.html"
		>
			<div class="sidebar-brand-icon rotate-n-15">
				<i class="fas fa-laugh-wink"></i>
			</div>
			<div class="sidebar-brand-text mx-3">Job Exact</div>
		</a>

		<!-- Divider -->
		<hr class="sidebar-divider my-0" />

		<!-- Nav Item - Dashboard -->
		<li>
			<router-link
				v-slot="{ isActive }"
				:to="{
					name: 'Dashboard',
				}"
				class="nav-item"
				:class="{
					active: isActive,
				}"
			>
				<a class="nav-link">
					<i class="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a
				>
			</router-link>
		</li>

		<!-- Divider -->
		<hr class="sidebar-divider" />

		<!-- Heading -->
		<div class="sidebar-heading">Pages</div>

		<!-- Nav Item - Contacts -->
		<li>
			<router-link
				v-slot="{ isActive }"
				:to="{
					name: 'ContactList',
				}"
				class="nav-item"
				:class="{
					active: isActive,
				}"
			>
				<a class="nav-link">
					<i class="fas fa-fw fa-chart-area"></i>
					<span>Contacts</span></a
				>
			</router-link>
		</li>

		<!-- Divider -->
		<hr class="sidebar-divider d-none d-md-block" />

		<!-- Sidebar Toggler (Sidebar) -->
		<div class="text-center d-none d-md-inline">
			<button id="sidebarToggle" class="rounded-circle border-0"></button>
		</div>
	</ul>
	<!-- End of Sidebar -->
</template>

<script lang="ts" src="./sidebar.ts"></script>

<style lang="scss" scoped></style>
