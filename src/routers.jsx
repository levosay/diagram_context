import { createBrowserRouter } from 'react-router-dom'
import { Home, SignIn, SignUp } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])
