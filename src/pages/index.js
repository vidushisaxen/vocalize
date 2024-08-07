import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Join from '../components/Join'
import Languages from '../components/Languages'
import Main from '../components/Main'
import WhyUs from '../components/WhyUs'
import React from 'react'


const index = () => {
  return (
    <>
    <main>
    <Header/>
    <Hero/>
    <Main/>
    <Info/>
    <Languages/>
    <WhyUs/>
    <Join/>
    <Faq/>
    <Footer/>
    </main>
    </>
  )
}

export default index