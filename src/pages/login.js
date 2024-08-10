import Footer from '../components/Footer'
import Header from '../components/Header'
import Login from '../components/login/Login'
import React from 'react'

const login = () => {
  return (
   <>
    <Header/>
    <main>
    <Login/>
    </main>
    <Footer/>
   </>
  )
}

export default login