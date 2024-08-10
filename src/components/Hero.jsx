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
 <div className='text-container'> 
 <div className='hero-text'>
    <h2 className='text-heading'>Get set for an electric future</h2>
    </div>
    {/* <div className='hero-button right-arrow-animate'>
        
        <button className='button1'><p>Our solutions</p>

        <div className='flex w-10 yellow-circle'>
            <span className='w-fit flex flex-row'>
            <FaArrowRight width="10px" color='#000' className='right-first ml-3'/>
            <FaArrowRight width="10px" color='#000'className='right-second ml-3' />
            </span>
        </div>

        </button>
    </div> */}

{/* <div className='btn hero-button bg-white  w-[20vw] rounded-full relative h-[5vw] overflow-hidden'>
                    <div className='custom bg-[#fff555] h-full w-full
                    flex items-center justify-end 
                    pr-[1.5vw] '>
                        <span className='w-[1.6vw] overflow-hidden'>
                        <span className='overflow-hidden flex flex-row gap-[.1vw] w-[200%] -translate-x-1/2'>
                            <img src='/icons/arrowright.svg' className='farrow' alt="arrow"/>
                            <img src='/icons/arrowright.svg' className='sarrow ' alt="arrow"/>
                            
                        </span>
                        </span>

                    </div>
                    <p className='text-black text-lg absolute z-10 left-[2vw] top-1/2 -translate-y-1/2'>
                        Our solutions
                    </p>
                </div>

    <div className='hero-para'>
        <p>Experts in smart </p>
        <p>EV charging solutions</p>
    </div>
    <div className='explore-button arrow-animate'>
        <button className='explore'>Explore</button>
        <div className='flex overflow-hidden w-10 mt-6'>
            <span className='w-fit flex gap-1 flex-col'>
            <FaArrowDownLong width="10px" color='#fff'  className='first'/>
            <FaArrowDownLong width="10px" color='#fff' className='second' />
            </span>
        </div>
        
    </div> */}
    
    </div>
    </div>
    
    </>
  )
}

export default Hero