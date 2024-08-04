import Link from 'next/link'
import React from 'react'

const Learn = () => {
  return (
   <>
   <div className='learnContainer h-[50vh] w-[50vw] flex items-center justify-center border-[1px] border-black'>
   <Link href="https://vocalize-learn.vercel.app/"> <button>Lets Learn</button></Link>

   </div>
   </>
  )
}

export default Learn