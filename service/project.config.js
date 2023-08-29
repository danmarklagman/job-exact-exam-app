'use strict'

module.exports = {
	outputDir: 'dist',

	dev: {
		publicPath: '/',
		port: 8080,
	},

	build: {
		publicPath: '/',
	},

	chainWebpack: (config) => {
		// Disable prefetching and preloading
		config.plugins.delete('prefetch')
		config.plugins.delete('preload')
	},
}
