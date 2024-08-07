import MainConvert from '../components/convert/MainConvert'
import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'

const convert = () => {
  return (
   <>
   <section className='convertContainer'>
    <Header/>
    <MainConvert/>
    <Footer/>

   </section>
   </>
  )
}

export default convert