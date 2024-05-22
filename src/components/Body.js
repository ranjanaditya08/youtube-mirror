import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex min-w-[768px]'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body