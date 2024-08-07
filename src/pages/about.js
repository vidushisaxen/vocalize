import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import About from '../components/About'

const about = () => {
  return (
   <>
   <section className='aboutContainer'>
    <Header/>
    <About/>
    <Footer/>

   </section>
   </>
  )
}

export default about