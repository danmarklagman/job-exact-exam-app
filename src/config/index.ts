import _get from 'lodash/get'

const config = {
	node_env: process.env.NODE_ENV,
	base_url: process.env.BASE_URL,
	app_name: process.env.VUE_APP_NAME,
	app_env: _get(process.env, 'VUE_APP_ENV', 'production'),
	app_url: process.env.VUE_APP_URL,
	debug: process.env.VUE_APP_DEBUG === 'true',
	app_api_url: process.env.VUE_APP_API_URL,
	app_web_url: process.env.VUE_APP_WEB_URL,
}

export default config
