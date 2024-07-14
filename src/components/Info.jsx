import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Info = () => {
    useGSAP(()=>{
        const text = new SplitType('.split-word', { types: 'words, chars' });
        const chars = document.querySelectorAll(".split-word .char");
    
        gsap.fromTo(chars,{
          opacity:0.3
        },{
          opacity:1,
          stagger:0.2,
          duration:3,
          scrollTrigger:{
            trigger:".split-word",
            start:"top bottom",
            end: "top top",
            scrub:1,
            // markers:true,
          }
        })
      })
  return (
    <>
    <section className="h-screen w-screen  flex items-center justify-center mt-[15vw]">
      <div className="w-[90%] h-[100%] mobile:w-[90%] text-wrap">
        <p className="text-center leading-tight text-[3vw] font-medium split-word mobile:text-[6vw] mobile:ml-[2vw]">
        Speakic offers interactive lessons for mastering new languages, seamless translation between multiple languages, and cutting-edge speech-to-text and text-to-speech conversion. Enhance your fluency with real-time conversation practice and accurate voice recognition. Perfect for students, travelers, and professionals, Speakic brings the world of languages to your fingertips.
        </p>
      </div>
      </section>
    </>
  );
};

export default Info;
