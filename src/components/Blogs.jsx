import React from 'react'
import { useEffect } from 'react';
import Link from 'next/link';

const Blogs = () => {
    useEffect(() => {
        let articles = document.querySelectorAll(".article");

        articles.forEach(i => {
          i.addEventListener(
            "mousemove",
            e => {
              let mouseX = e.offsetX;
              let mouseY = e.offsetY;
              i.querySelector(".overlay")
                .style.setProperty(
                "background-image",
                `radial-gradient(circle at ${(mouseX) * 100  / -i.offsetWidth+100}% ${(mouseY) * 100  / -i.offsetHeight+100}%,rgba(0,0,0,0.2) 25%,rgba(0,0,0,0.33) 50%)`
              );
              i.style.setProperty("transform", `rotateY(${  ( ( (mouseX*100) / i.offsetWidth - 50 ) / 100) * 2}deg) rotateX(${  ( ( (mouseY*100) / i.offsetHeight - 50 ) / 100) * 2}deg) `
        )
            },
            false
          );
          i.addEventListener("mouseleave",()=>{
            i.style.setProperty("transform",`rotateX(0deg) rotateY(0deg)`);
            
                  i.querySelector(".overlay")
                .style.setProperty(
                "background-image",
                `radial-gradient(circle at 50% 50%,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.3) 50%)`
              );
          })
        });
        
    
    
    }, [])
    
  return (
   <>
   <div class="wrap">
    <Link href="https://medium.com/@alan-cohen-56300/teaching-english-as-a-second-language-f573b8d80ac4">
        <div class="article article1">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="AI and language learning">AI and language learning</span>
            </div>
            <h1>
                <span>Language Learning with the help of AI</span>
            </h1>
        </div>
        </Link>
        <Link href="https://medium.com/@SimiBurn/the-best-tools-to-get-started-with-speech-to-text-writing-2167fffde4e2">
        <div class="article article2">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Speech-to-Text">Speech-to-Text</span>
            </div>
            <h1>
                <span>Best Tools to Get Started with Speech-to-Text Writing</span>
            </h1>
        </div>
        </Link>
        <Link href="https://medium.com/@sh-tsang/brief-review-a-large-scale-multilingual-dataset-for-speech-research-e8e9592e81fd">
      <div class="article article3">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Text-to-Speech">Text-to-Speech</span>
            </div>
            <h1>
                <span> Large-Scale Multilingual Dataset for Speech Research</span>
            </h1>
        </div>
        </Link>
        <Link href="https://medium.com/@khanmuhammadaizazullah/bridging-translating-languages-our-journey-into-neural-machine-translation-%EF%B8%8F-21fffbf89b02">
        <div class="article article4">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Language Translation">Language Translation</span>
            </div>
            <h1>
                <span>Our Journey into Neural Machine Translation</span>
            </h1>
        </div>
        </Link>
        <Link href="https://medium.com/language-lab/all-my-introverted-language-learning-problems-00ea241fecc5">
        <div class="article article5">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Learning">Learning</span>
            </div>
            <h1>
                <span>Language Learning</span>
            </h1>
        </div>
        </Link>
        <Link href="https://medium.com/codex/breaking-language-barriers-towards-real-time-hdmi-translation-for-japanese-rpgs-0983af3e0638"  >
        <div class="article article6">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Language Barriers">Language Barriers</span>
            </div>
            <h1>
                <span>Breaking Language Barriers:</span>
            </h1>
        </div>
        </Link>
    </div>

   </>
  )
}

export default Blogs