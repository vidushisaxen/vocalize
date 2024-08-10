import Header from '../Header'
import Link from 'next/link'
import React from 'react'


const MainConvert = () => {
  const text =
    "Text-to-speech feature is now available on relatively any website or blog. It's a game changer that you can listen to the content instead of reading it. Especially effective for people with visual or cognitive impairments or people who are on the go. I came up with the idea to implement it for my blog, so this is how I started doing a research on this topic which ended up being a tutorial for you. So in this tutorial, we will go through the process of building a text-to-speech component in React. We will use the Web Speech API to implement the text-to-speech functionality.";
  return (
   <>
   <Header/>
   <div className="conversion-body grid grid-cols-2 gap-4 md:grid-cols-1 ">
          <div class="conversion-card">
            <div class="conversion-wrapper">
              {/* <img src="/images/speech2.png" class="conversion-cover-image" /> */}
            </div>
            <Link href="">
              <h2 className="conversion-title">SPEECH TO TEXT</h2>
              </Link>
            {/* <img src="/images/speech3.png" class="conversion-character" /> */}
          </div>
          <div class="conversion-card">
            <div class="conversion-wrapper">
              {/* <img src="/images/text2.jpg" class="conversion-cover-image" /> */}
            </div>
            <Link href="/">
            <h2 className="conversion-title">TEXT TO SPEECH</h2>
            </Link>
            {/* <img src="/images/text1.png" class="conversion-character" id="text" /> */}
          </div>
          
        </div>
   </>
  )
}

export default MainConvert

