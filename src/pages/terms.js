import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Terms from '../components/Terms'
import PrivacyHero from '../components/PrivacyHero'

const terms = () => {
  return (
    <>
        <Header/>
        <main>
        <PrivacyHero/>
        <Terms/>
        </main>
        <Footer/>
    </>
  )
}

export default terms