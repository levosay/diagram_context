import api from '@/api'
import { useCookies } from 'react-cookie'

export const getUsers = async (id = '') => {
  const [cookies, setCookie] = useCookies(['Auth'])

  const { data } = await api.get(`/users/${id}`, {
    headers: {
      'Authorization': `Basic ${cookies?.Auth}`
    }
  })

  return data
}
