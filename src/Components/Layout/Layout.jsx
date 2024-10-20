import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'

function Layout() {
  const [title, setTitle] = useState('ERP Dash');

  function handleNavLink(navName) {
    setTitle(navName);
  }

  return <>
      <div className='bg-gray-50 h-screen'>
        <NavBar title={title} handleNavLink={handleNavLink} />
        <Sidebar handleNavLink={handleNavLink} />
        <Outlet />
      </div>
      
    </>
}

export default Layout