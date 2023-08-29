import _get from 'lodash/get'
import axios from 'axios'
import config from '@/config'
import cookies from 'js-cookie'

const api = axios.create({
	baseURL: _get(config, 'app_api_url'),
})

api.defaults.params = {}

api.interceptors.request.use(
	(config) => {
		const accessToken = cookies.get('access_token')
			? JSON.parse(cookies.get('access_token')!)
			: {}
		console.log(accessToken)

		if (accessToken) {
			config!.headers!.Authorization = `Bearer ${accessToken.access_token}`
		}

		return config
	},
	(error) => Promise.reject(error)
)

export default api
