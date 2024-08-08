import Footer from '../components/Footer'
import Header from '../components/Header'
import Translate from '../components/translate/Translate'
import React from 'react'
import TranslateHero from '../components/translate/TranslateHero'

const translate = () => {
  return (
   <>
   <section className='translateContainer'>
    <Header/>
    <TranslateHero/>
    <Translate/>
    <Footer/>
   </section>
   
   </>
  )
}

export default translate