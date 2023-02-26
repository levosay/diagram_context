import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useAuthUser } from '@/hooks/index.js'
import { menu } from '@/public'

export const Header = () => {
  const { logOut } = useAuthUser()

  const menuList = useMemo(() => (
    menu.map(({ id, title, href }) => (
      <Link key={id} to={href}>
        <span className="text-sm uppercase hover:text-blue-400">{title}</span>
      </Link>
    ))
  ), [menu])

  return (
    <div className="container mx-auto py-8 mb-5 flex justify-between">
      <h2 className="text-blue-400">DiagramBest</h2>
      <div className="flex gap-6">
        {menuList}
      </div>
      <span
        className="text-sm uppercase hover:text-blue-400 cursor-pointer"
        onClick={logOut}
      >
        Выйти
      </span>
    </div>
  )
}
