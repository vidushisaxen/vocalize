import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Contact from '../components/Contact'
import ContactHero from '../components/ContactHero'

const contact = () => {
  return (
    <>
    <section className='contactContainer'>
    <Header/>
    <ContactHero/>
     <Contact/>
     <Footer/>
     </section>
    </>
  
  )
}

export default contact