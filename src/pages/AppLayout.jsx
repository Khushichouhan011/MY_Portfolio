import React from 'react'
import { Header } from './header/Header'
import {Footer} from "./footer/Footer"
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout
