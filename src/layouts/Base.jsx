import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Base = ({ children }) => {
  const navigate = useNavigate()
  const [cookies] = useCookies(['authToken'])

  useEffect(() => {
    if (!cookies?.authToken) {
      navigate('/signin')
    }
  }, [cookies])

  return (
    <div>
      {children}
    </div>
  )
}
