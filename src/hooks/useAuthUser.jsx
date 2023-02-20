import { postSignin, postSignup } from '@/api/endpoints'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initMesReq = {
  message: '',
  error: ''
}

export const useAuthUser = () => {
  const [mesReq, setMesReq] = useState(initMesReq)
  const [_, setCookie] = useCookies(['authToken'])
  const navigate = useNavigate()

  const signinToCookies = (body) => {
    postSignin(body)
      .then(data => {
        if (data) {
          setCookie('authToken', data)
          setMesReq(mesReq)
          navigate('/')
        }
      })
      .catch(({ response }) => {
        setMesReq({ ...mesReq, error: response.data.message })
      })
  }

  const signupToRoute = (body) => {
    postSignup(body)
      .then(({ message }) => {
        setMesReq({ ...mesReq, message })
        navigate('/signin')
      })
      .catch(({ response }) => {
        setMesReq({ ...mesReq, error: response.data.message })
      })
  }

  return {
    signinToCookies,
    signupToRoute,
    mesReq
  }
}
