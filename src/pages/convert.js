import ConversionHero from '../components/convert/ConversionHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import ToSpeech from '../components/convert/ToSpeech'

const convert = () => {
  return (
   <>
    <Header/>
    <main>
      {/* <ConversionHero/> */}
      <ToSpeech/>
    </main>
    <Footer/>
   </>
  )
}

export default convert