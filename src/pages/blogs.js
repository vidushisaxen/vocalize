import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Blogs from '../components/Blogs'
import BlogsHero from '../components/BlogsHero'

const blogs = () => {
  return (
    <>
    <Header/>
    <main>
    <BlogsHero/>
   <Blogs/>
   </main>
    <Footer/>
    
    </>
  )
}

export default blogs