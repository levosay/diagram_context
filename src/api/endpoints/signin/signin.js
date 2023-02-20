import api from '@/api'

export const postSignup = async (body) => {
  const { data } = await api.post('/signup', data)

  return data
}
