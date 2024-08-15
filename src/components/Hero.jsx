import React, {useRef , useEffect} from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowDownLong } from "react-icons/fa6";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import { FaArrowRight } from "react-icons/fa6";


gsap.registerPlugin(useGSAP);


function Hero() {
    const container = useRef();
    const lenis=useLenis();
    // const stopScroll = useLenis(() => {
    //     lenis.stop();
    //   })
     //   const startScroll = useLenis(() => {
    //     lenis.start();
    //   })
    // useEffect(() => {
    //     function stopScroll(){
    //         lenis.stop();
    //       }
       
    //     function startScroll(){
    //         lenis.start();
    //     }

    // }, [])
    

    useGSAP(()=>{
        const tl = gsap.timeline();

        
      
    tl.from(".vdo",{
        y:1000,
        delay:1,
        duration:1,
        ease: 'power3.out',
        // onStart:()=>{
        //     stopScroll();
        // }
    })
    tl.to(".vdo",{
        y:0,
        delay:0.5,
        duration:1,
        display:"block",
        height:"100vh",
        width:"100vw",
        margin:"0%",
        borderRadius:"0px",
        objectFit:"cover",
        ease: 'power3.out',
    })

    tl.from(".text-container",{
        display:"none",
    })

    tl.from(".text-heading",{
  y:50,
  delay:-0.6,
  duration:0.5,
  opacity:0
    })
    tl.from(".hero-button",{
        x:-500,
        duration:0.3,
        delay:-0.6
    })
    tl.from(".hero-para p",{
        y:100,
        duration:0.25,
        stagger:0.05,
        opacity:0,
        delay:-0.6
        
    })
    tl.from(".explore-button",{
        x:200,
        duration:0.5,
        delay:-0.6
        // onComplete:()=>{
        //     startScroll();
        // }  
    })
    
   
   
    },{scope:container})
  return (
    <>
    
    <div ref ={container}   className='hero-container'>
        {/* <div className='yellow'></div> */}
 <video 
    src='/videos/hero-video.mp4'  
    autoPlay 
    playsInline  
    loop 
    muted 
    className='vdo' 
    width="450px"
    >
        
    </video>
    </div>
    
    </>
  )
}

export default Hero