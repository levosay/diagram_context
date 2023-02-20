import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../api/endpoints/users'

export const Base = ({ children }) => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['Auth'])

  const data = getUsers()

  console.log('data_getUsers__ ', data)

  if (!cookies?.Auth) {
    navigate('/signin')
  }

  return (
    <div>
      {children}
    </div>
  )
}
