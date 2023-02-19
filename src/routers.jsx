import { createBrowserRouter } from 'react-router-dom'
import { Home, SignIn } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signin',
    element: <SignIn />
  }
])
