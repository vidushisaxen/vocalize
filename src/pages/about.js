import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import About from '../components/About'
import AboutHero from '../components/AboutHero'

const about = () => {
  return (
   <>
    <Header/>
    <main>
    <AboutHero/>
    <About/>
    </main>
    <Footer/>

   </>
  )
}

export default about