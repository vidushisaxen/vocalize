import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Login from '@/components/login/Login'
import React from 'react'

const login = () => {
  return (
   <>
   <section className='loginContainer'>
    <Header/>
    <Login/>
    <Footer/>

   </section>
   </>
  )
}

export default login