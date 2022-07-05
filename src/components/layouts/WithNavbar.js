import React from 'react'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function WithNavbar() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet/>
      <Footer />
    </div>
  )
}
