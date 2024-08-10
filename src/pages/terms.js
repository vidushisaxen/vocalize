import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Terms from '../components/Terms'
import PrivacyHero from '../components/PrivacyHero'

const terms = () => {
  return (
    <>
    <section className='termsContainer'>
        <Header/>
        <PrivacyHero/>
        <Terms/>
        <Footer/>

    </section>
    </>
  )
}

export default terms