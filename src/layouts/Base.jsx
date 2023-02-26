import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@components'

export const Base = ({ children }) => {
  const navigate = useNavigate()
  const [cookies] = useCookies(['authToken'])

  useEffect(() => {
    if (!cookies?.authToken) {
      navigate('/signin')
    }
  }, [cookies])

  return (
    <>
      <Header />
      {children}
    </>
  )
}
