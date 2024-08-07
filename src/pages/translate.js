import Footer from '../components/Footer'
import Header from '../components/Header'
import Translate from '../components/translate/Translate'
import React from 'react'

const translate = () => {
  return (
   <>
   <section className='translateContainer'>
    <Header/>
    <Translate/>
    <Footer/>
   </section>
   
   </>
  )
}

export default translate