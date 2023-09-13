import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
//import { useSelector } from 'react-redux'

export default function Layout() {
//let user =useSelector(store => store.userReducer.user)

let token = localStorage.getItem('token')

if(!token == ''){
  return <Navigate to ={'/signup'}/>
}
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Nav />
          <div className='w-full flex-1'>
            <Outlet />
          </div>
        <Footer />
    </div>
  )
}