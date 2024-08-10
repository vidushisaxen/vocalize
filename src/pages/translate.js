import Footer from '../components/Footer'
import Header from '../components/Header'
import Translate from '../components/translate/Translate'
import Join from '../components/Join'
import React from 'react'
import TranslateHero from '../components/translate/TranslateHero'

const translate = () => {
  return (
   <>
    <Header/>
    <main>
    <TranslateHero/>
    <Translate/>
    <Join/>
    </main>
    <Footer/>
 
   
   </>
  )
}

export default translate