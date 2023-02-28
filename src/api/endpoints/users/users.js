import api from '@/api'

export const getUsers = async (id = '') => {
  const { data } = await api.get(`/users/${id}`)

  return data
}

getUsers().then(data => {
  console.log('asdasdasdas______ ', data)
})
