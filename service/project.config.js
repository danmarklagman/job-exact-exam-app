'use strict'

module.exports = {
	outputDir: 'dist',

	dev: {
		publicPath: '/',
		port: process.env.VUE_APP_PORT || 8080,
        host: process.env.VUE_APP_HOST || 'localhost',
        server: process.env.VUE_APP_SERVER || 'http'
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
