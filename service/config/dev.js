'use strict'

const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./base')
const cssWebpackConfig = require('./css')
const config = require('../project.config')

module.exports = merge(baseWebpackConfig, cssWebpackConfig, {
	mode: 'development',

	devtool: 'eval-cheap-module-source-map',

	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /./, to: '/index.html' }],
		},
		devMiddleware: {
			publicPath: config.dev.publicPath,
		},
		open: false,
		host: config.dev.host,
		port: config.dev.port,
		liveReload: false,
		server: config.dev.server,
	},

	infrastructureLogging: {
		level: 'warn',
	},

	stats: {
		assets: false,
		modules: false,
	},
})
