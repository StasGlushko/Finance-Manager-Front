import axios from 'axios'

export const instanceAxios = axios.create({
	baseURL: 'http://localhost:3001/',
})

instanceAxios.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})
