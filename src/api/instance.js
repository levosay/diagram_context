import axios from 'axios'
import { getCookie } from '@/helpers'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use((config) => {
    const token = getCookie('authToken')

    if (config.url === '/users/' && token) {
      config.headers['Authorization'] = `Basic ${token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default api
