import React from 'react'

const WhyUs = () => {
  return (
  <>
  <div className='flex items-center justify-center flex-col mt-[10vw]'>
  <h2 className='text-[3vw]'>Why to choose Speakic?</h2>
  <div className='why-card flex justify-between items-center mt-[5vw] w-[80%]'>
    <div className='w-[50%]'>
    <img src='/images/why-1.jpg'/>
    </div>
    <div className='flex justify-center items-start flex-col w-[40%] gap-[1vw]'>
      <h3>AN INTERACTIVE COMMUNITY</h3>
      <h2 className='text-[2vw] font-semibold'>Learn more together</h2>
      <p>Go beyond the textbook. Practice pronunciation, gain cultural insights and exchange local language tips with our global community of learners.</p>
    </div>
  </div>

  <div className='why-card flex justify-between items-center mt-[5vw] flex-row-reverse w-[80%]'>
    <div className='w-[50%]'>
    <img src='/images/why-2.jpg'/>
    </div>
    <div className='flex justify-center items-start flex-col w-[40%] gap-[1vw]'>
      <h3>COURSES CREATED BY EXPERTS</h3>
      <h2 className='text-[2vw] font-semibold'>Learn with confidence</h2>
      <p>Make real improvements, get real results. Be prepared for real-world interactions by building solid foundations with plenty of speaking, listening, reading and writing practice.</p>
    </div>
  </div>

  <div className='why-card flex justify-between items-center mt-[5vw] w-[80%]'>
    <div className='w-[50%]'>
    <img src='/images/why-3.png'/>
    </div>
    <div className='flex justify-center items-start flex-col w-[40%] gap-[1vw]'>
      <h3>IMMERSIVE SPEAKING PRACTICE</h3>
      <h2 className='text-[2vw] font-semibold'>Learn for real life</h2>
      <p>Get instant feedback for lasting confidence. Speaking practice helps you beat speaking anxiety through personalised pronunciation feedback and immersive videos featuring native speakers.</p>
    </div>
  </div>

  <div className='why-card flex justify-between items-center mt-[5vw] flex-row-reverse w-[80%]'>
    <div className='w-[50%]'>
    <img src='/images/why-4.jpg'/>
    </div>
    <div className='flex justify-center items-start flex-col w-[40%] gap-[1vw]'>
      <h3>SELF-LED LEARNING</h3>
      <h2 className='text-[2vw] font-semibold'>Learn your way</h2>
      <p>Whatever your reason for learning a language, we’ve got you covered. Learn for any goal with simplified courses and short, but focused lessons. You’re in control.</p>
    </div>
  </div>
  </div>
  </>
  )
}

export default WhyUs