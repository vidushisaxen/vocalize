import React,{useRef} from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Languages = () => {
    const mstart= useRef(null);
    const mstart1 = useRef(null);
    const mstart2= useRef(null);
    const icons = useRef(null);
    const brandsContainer = useRef(null);
    const mend = useRef(null);
    const mend1=useRef(null);
    const mend2=useRef(null);

    let xPer=0;
    let direction=-1;

    let xPer2=0;
    let direction2=1;

    useGSAP(()=>{
        gsap.to(mstart.current,{
            scrollTrigger:{
                trigger:brandsContainer.current,
                scrub:0.25,
                start:"top bottom",
                end:brandsContainer.current.innerHeight,
                onUpdate:(e)=>(direction=e.direction*-1)
            },
            x: "-500px"
        });
        requestAnimationFrame(animation);
    })

    const animation=()=>{
        if(xPer<-100){
            xPer=0
        }else if(xPer>0){
            xPer=-100
        }
        gsap.set(mstart1.current,{xPercent:xPer});
        gsap.set(mstart2.current,{xPercent:xPer});
        requestAnimationFrame(animation);
        xPer +=0.1*direction;
    }


    useGSAP(()=>{
        gsap.to(mend.current,{
            scrollTrigger:{
                trigger:brandsContainer.current,
                scrub:0.25,
                start:"top bottom",
                end:brandsContainer.current.innerHeight,
                onUpdate:(e)=>(direction2 = e.direction * 1)
            },
            x: "80px",
        });
        requestAnimationFrame(animation2);
    });

    const animation2=()=>{
        if(xPer2<-100){
            xPer2=0;
        }else if(xPer2>0){
            xPer2=-100;
        }
        gsap.set(mend1.current,{xPercent:xPer2})
        gsap.set(mend2.current,{xPercent:xPer2})
        requestAnimationFrame(animation2);
        xPer2 += 0.1*direction2;
    }
  return (
    <section className='w-screen  bg-[#eaeef0] py-[10vw] overflow-hidden'>
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-[3vw] font-medium leading-none fadeh2'>Languages Offered </h2>
    </div>



    <div className='mt-[5vw] trust-container' ref={brandsContainer} >

        <div className='flex flex-nowrap items-stretch justify-start  mstart relative whitespace-nowrap w-fit' ref={mstart} >
        <div className=' flex items-center trust-con-text justify-start mstart1 ' ref={mstart1} >
            <div className='trust-main flex items-center justify-center ' ref={icons}>
                <img src='/icons/arabic.svg' alt='arabic'
                 width="100" height="50"/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/bengali.svg' alt='bengali'
                 width="100" height="50"className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/chinese.svg' alt='chinese'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/czech.svg' alt='czech'
                 width="100" height="50"className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/dutch.svg' alt='dutch'
                 width="100" height="50"
                 className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/english.svg' alt='english'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/french.svg' alt='french'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/german.svg' alt='german'
                 width="100" height="50"className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/greek.svg' alt='greek'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/hindi.svg' alt='hindi'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/hungarian.svg' alt='hungarian'
                 width="100" height="50"className='w-full'/>
            </div>
            </div>
             <div className='flex items-center trust-con-text justify-start mstart2 absolute left-[100%]' ref={mstart2}>
             <div className='trust-main flex items-center justify-center ' ref={icons}>
                <img src='/icons/arabic.svg' alt='arabic'
                 width="100" height="50"/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/bengali.svg' alt='bengali'
                 width="100" height="50"className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/chinese.svg' alt='chinese'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/czech.svg' alt='czech'
                 width="100" height="50"className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/dutch.svg' alt='dutch'
                 width="100" height="50"
                 className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/english.svg' alt='english'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/french.svg' alt='french'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/german.svg' alt='german'
                 width="100" height="50"className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/greek.svg' alt='greek'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/hindi.svg' alt='hindi'
                 width="100" height="50" className='w-full'/>
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/hungarian.svg' alt='hungarian'
                 width="100" height="50"className='w-full'/>
            </div>
             </div> 
        
        </div>


        <div className='flex flex-nowrap items-stretch justify-end  mend relative whitespace-nowrap w-fit' ref={mend} >
        <div className=' flex items-center trust-right justify-end mend1' ref={mend1}>
        <div className='trust-main flex items-center justify-center ' ref={icons}>
                <img src='/icons/indonesian.svg' alt="indonesian"
                 width="100" height="50" />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/italian.svg' alt="italian" 
                 width="100" height="50"className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/japanese.svg' alt="japanese"
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/korean.svg' alt="korean"
                 width="100" height="50"className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/polish.svg' alt="polish"
                 width="100" height="50"
                 className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/portuguese.svg' alt="portuguese"
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/romanian.svg' alt='romanian'
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/russian.svg' alt='russian'
                 width="100" height="50"className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/spanish.svg' alt='spanish'
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/tagalog.svg' alt='tagalog'
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/thain.svg' alt='thain'
                 width="100" height="50"className='w-full' />
            </div>


            </div>
             <div className=' flex items-center trust-right justify-end mend2 absolute left-[100%]' ref={mend2}>
             <div className='trust-main flex items-center justify-center ' ref={icons}>
                <img src='/icons/indonesian.svg' alt="indonesian"
                 width="100" height="50" />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/italian.svg' alt="italian" 
                 width="100" height="50"className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/japanese.svg' alt="japanese"
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/korean.svg' alt="korean"
                 width="100" height="50"className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/polish.svg' alt="polish"
                 width="100" height="50"
                 className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/portuguese.svg' alt="portuguese"
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/romanian.svg' alt='romanian'
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/russian.svg' alt='russian'
                 width="100" height="50"className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/spanish.svg' alt='spanish'
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center' ref={icons}>
                <img src='/icons/tagalog.svg' alt='tagalog'
                 width="100" height="50" className='w-full' />
            </div>

            <div className='trust-main flex items-center justify-center'ref={icons}>
                <img src='/icons/thain.svg' alt='thain'
                 width="100" height="50"className='w-full' />
            </div>

            </div>    
        </div>

        
    </div>

   </section>
  )
}

export default Languages