import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers.jsx'
import './index.css'
import { TableTabsProvider } from '@/contexts/tableTabs/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TableTabsProvider>
    <RouterProvider router={router} />
  </TableTabsProvider>
)
