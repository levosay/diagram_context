import api from '@/api'

export const postSignin = async (body) => {
  const { data } = await api.post('/signin', body)

  return data
}
