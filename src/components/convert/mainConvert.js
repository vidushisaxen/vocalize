import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const MainConvert = () => {
  return (
   <>
   <Header/>
   <div className="conversion-body grid grid-cols-2 gap-4 md:grid-cols-1 ">
          <div class="conversion-card">
            <div class="conversion-wrapper">
              <img src="/images/speech2.png" class="conversion-cover-image" />
            </div>
            <Link href="/totext">
              <h2 className="conversion-title">SPEECH</h2>
              </Link>
            <img src="/images/speech3.png" class="conversion-character" />
          </div>
          <div class="conversion-card">
            <div class="conversion-wrapper">
              <img src="/images/text2.jpg" class="conversion-cover-image" />
            </div>
            <Link href="/tospeech">
            <h2 className="conversion-title">TEXT</h2>
            </Link>
            <img src="/images/text1.png" class="conversion-character" id="text" />
          </div>
          
        </div>
   </>
  )
}

export default MainConvert

