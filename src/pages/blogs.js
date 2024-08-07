import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Blogs from '../components/Blogs'

const blogs = () => {
  return (
    <>
    <section className='blogContainer'>
    <Header/>
   <Blogs/>
    <Footer/>
    </section>
    </>
  )
}

export default blogs