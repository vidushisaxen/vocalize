import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Link from 'next/link'
import Learn from '../components/learning/Learn'
import LearnHero from '../components/learning/LearnHero'

const learn = () => {
  return (
   <>
    <Header/>
    <main>
      <LearnHero/>
   <Learn/>
   </main>
    <Footer/>
   </>
  )
}

export default learn