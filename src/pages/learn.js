import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Link from 'next/link'
import Learn from '../components/learning/Learn'

const learn = () => {
  return (
   <>
   <section className='learnContainer'>
    <Header/>
   {/* <Learn/> */}
    <Footer/>

   </section>
   </>
  )
}

export default learn