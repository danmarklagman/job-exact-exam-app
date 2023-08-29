<template>
	<div
		:class="{
			'loading-container': true,
			loading: isLoading,
			visible: isVisible,
		}"
	>
		<div class="loader" :style="{ width: progress + '%' }">
			<div class="light"></div>
		</div>
		<div class="glow"></div>
	</div>
</template>

<script lang="ts" src="./progress-bar"></script>

<style scoped>
.loading-container {
	font-size: 0; /* remove space */
	position: fixed;
	top: 0;
	left: 0;
	height: 5px;
	width: 100%;
	opacity: 0;
	display: none;
	z-index: 999;
	transition: opacity 200;
}

.loading-container.visible {
	display: block;
}
.loading-container.loading {
	opacity: 1;
}

.loader {
	background: #e4b454;
	display: inline-block;
	height: 100%;
	width: 50%;
	overflow: hidden;
	transition: 200 width ease-out;
}

.loader > .light {
	float: right;
	height: 100%;
	width: 20%;
	background-image: linear-gradient(to right, #e4b454, #b69043, #e4b454);
	animation: loading-animation 2s ease-in infinite;
}

.glow {
	display: inline-block;
	height: 100%;
	width: 30px;
	margin-left: -30px;
	box-shadow: 0 0 10px #e4b454;
}

@keyframes loading-animation {
	0% {
		margin-right: 100%;
	}
	50% {
		margin-right: 100%;
	}
	100% {
		margin-right: -10%;
	}
}
</style>
