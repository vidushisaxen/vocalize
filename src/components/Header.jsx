import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {

  return (
    <>
      <header
        className="py-[1vw] px-[3vw] headerContainer fixed top-0 left-0 z-[10] h-[5vw] w-screen bg-[#e6e6e669] "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src="/icons/favicon.svg" alt="icon" height="35" width="35"/>
            <Link href="#">
            <h2 className="text-[1.2vw] text-[#363636] ml-[1vw] font-medium" >Speakic</h2>
            </Link>
          </div>
          <div className="flex space-x-[4vw] items-center">
            <div className="headerLinks flex">
                <ul className="flex items-center space-x-[4vw]  text-[1.2vw] font-medium headerInnerLinks">
                  <li>
                    <Link href="#" className="text-[#363636] hover:text-[#fff] transition-all duration-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about"
                      className="text-[#363636] hover:text-[#fff] transition-all duration-500"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-[#363636] hover:text-[#fff] transition-all duration-500"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="text-[#363636] hover:text-[#fff] transition-all duration-500"
                    >
                      Login
                    </Link>
                  </li>
                  
                </ul>
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
