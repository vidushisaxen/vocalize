import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const headerCon = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerCon.current,
        scrub: 1,
        start: "top top",
        end: "bottom 10%",
      },
    });

    tl.to(".headerLogoText1", {
      xPercent: -10,
      opacity: 0,
      duration: 0.5,
    })
      .to(".headerLogoText2", {
        xPercent: -10,
        opacity: 0,
        duration: 0.5,
        delay: -0.5,
      })
      .to(".headerInnerLinks li", {
        xPercent: 10,
        opacity: 0,
        stagger: 0,
        duration: 0.5,
        delay: -0.5,
      })
      .to(".headerToggle", {
        scaleX: 1,
        transformOrigin: "left",
      });
  });

  return (
    <>
      <header
        className="py-[2vw] px-[3vw] headerContainer fixed top-0 left-0 z-[10] h-[10vw] w-screen"
        ref={headerCon}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src="/icons/favicon.svg" alt="icon" height="35" width="35"/>
            <Link href="#">
            <h2 className="text-[1vw] text-[#9b9b9b] ml-[1vw] font-semibold" >Speakic</h2>
            </Link>
          </div>
          <div className="flex space-x-[4vw] items-center">
            <div className="headerLinks flex">
                <ul className="flex items-center space-x-[4vw]  text-[1vw] font-semibold headerInnerLinks">
                  <li>
                    <Link href="#" className="text-[#fff]">
                      Home.
                    </Link>
                  </li>
                  <li>
                    <Link href="/about"
                      className="text-[#9b9b9b] hover:text-[#fff] transition-all duration-500"
                    >
                      About us.
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-[#9b9b9b] hover:text-[#fff] transition-all duration-500"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="text-[#9b9b9b] hover:text-[#fff] transition-all duration-500"
                    >
                      Login
                    </Link>
                  </li>
                  
                </ul>
              <div className=" headerToggle flex relative w-[3vw] h-[3vw] bg-[#ffffff0d] justify-center items-center scale-x-0 mr-[-4vw] ml-[1vw]">
                <span className="headerToggle1 absolute bg-white h-[1px] w-[60%] top-[1vw]"></span>
                <span className="headerToggle2 absolute bg-white h-[1px] w-[60%] top-[1.5vw]"></span>
                <span className="headerToggle2 absolute bg-white h-[1px] w-[40%] top-[2vw]"></span>
              </div>
            </div>
            <Link href="/contact">
            <div className="headerButton">
              <button className="bg-[#88038F] text-white text-[1vw] px-[1vw] py-[0.5vw] btn-anim relative overflow-hidden z-[1]">
                Let Connect
              </button>
            </div>
            </Link>
          </div>
          </div>
        
      </header>
    </>
  );
}

export default Header;
