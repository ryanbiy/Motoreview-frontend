import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div>
  <Navbar />
  <div className='container p-3' style={{"min-height":"80vh"}} >
  <Outlet/>
  </div>
  <Footer/>
  </div>
  )
}

export default Layout