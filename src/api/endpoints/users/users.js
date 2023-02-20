import api from '@/api'
import { useCookies } from 'react-cookie'

export const getUsers = async (id = '') => {
  const [cookies] = useCookies(['authToken'])

  const { data } = await api.get(`/users/${id}`, {
    headers: {
      'Authorization': `Basic ${cookies?.authToken}`
    }
  })

  return data
}
