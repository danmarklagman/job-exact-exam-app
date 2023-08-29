<template>
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
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="d of data" :key="d">
					<td>Tiger Nixon</td>
					<td>System Architect</td>
					<td>Edinburgh</td>
					<td>61</td>
					<td>2011/04/25</td>
					<td>$320,800</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts" src="./data-table.ts"></script>
