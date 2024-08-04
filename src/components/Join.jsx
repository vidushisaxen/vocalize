import React from 'react'

const Join = () => {
  return (
    <>
    <div className='join-container w-[100%] rounded-md h-[100%] mt-[10vw] mb-[50vw] '>
      <div className='absolute'>
    <img src='/images/join-bg.jpg' className='h-full w-screen'/>
    </div>
<div className='relative top-[250px] left-[20%] gap-[2vw]'>
  <h2 className='text-[4vw] text-white'>Join our online learning community</h2>
  <p className='text-[2vw] text-white'>An award-winning language learning platform for new and advanced learners.</p>
  <button className='px-[4vw] py-[1vw] bg-[#88038F] rounded-xl mt-[3vw] text-white text-[2vw] ml-[20%]'> Get Started.</button>
</div>
    </div>
    </>
  )
}

export default Join