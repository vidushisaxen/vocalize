import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <section>
    <div className="footer-container">
        <div className="top-footer">
          <div className="footer-logo">
            <img src="/icons/favicon.svg"  alt="icon"/>
          </div>
          <div className="footer-contact">
            <p>
              +44(0)333 090 7275
              <span className="block footer-border"></span>
            </p>

            <p>
              enquiries@speakic.com
              <span className="block footer-border"></span>
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="bottom-footer">
          <div className="left-text">
            <p>
            Unlock the world of languages with Speakic – your all-in-one language learning and translation platform!
            </p>

            {/* <div className="client-button">
              <p>Client portal</p>
              <div className="client-yellow">
                <FaArrowRight width="10px" color="#000" />
              </div>
            </div> */}
          </div>
          <div className="right-links">
            <div className="navigation">
              <h2>Navigation</h2>
              <ul>
                <li>
                  <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/about" className="fname">
                        About
                      </Link>
                      <Link href="/about" className="sname">
                        About
                      </Link>
                    </span>
                  </span>
                </li>

                <li>
                <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/contact" className="fname">
                        Contact
                      </Link>
                      <Link href="/contact" className="sname">
                        Contact
                      </Link>
                    </span>
                  </span>
                </li>
                <li>
                <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/blogs" className="fname">
                        Blogs
                      </Link>
                      <Link href="/blogs" className="sname">
                        Blogs
                      </Link>
                    </span>
                  </span>
                </li>
                <li>
                <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/terms" className="fname">
                       Terms
                      </Link>
                      <Link href="/terms" className="sname">
                       Terms
                      </Link>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h2>Services</h2>
              <ul>
                <li>
                <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/learn" className="fname">
                        Learning
                      </Link>
                      <Link href="/learn" className="sname">
                        Learning
                      </Link>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/convert" className="fname">
                        Conversion
                      </Link>
                      <Link href="/convert" className="sname">
                        Conversion
                      </Link>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <Link href="/translate" className="fname">
                       Translating
                      </Link>
                      <Link href="/translate" className="sname">
                       Translating
                      </Link>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <a href="#" className="fname">
                        Helpbooks
                      </a>
                      <a href="#" className="sname">
                        Helpbooks
                      </a>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="follow-us">
              <h2>Developers</h2>
              <ul>
                <li>
                <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <a href="#" className="fname">
                        Shivanshika Agarwal
                      </a>
                      <a href="#" className="sname">
                        Shivanshika Agarwal
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="leading-[3vw] overflow-hidden nav-footer-link">
                    <span className="overflow-hidden flex flex-col gap-[0.8vw] h-[200%] -translate-y-1/2">
                      <a href="#" className="fname">
                        Vidushi Saxena
                      </a>
                      <a href="#" className="sname">
                        Vidushi Saxena
                      </a>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © Speakic 2024</p>
          <span>
            <p>
              <a href="#">Site by speakic</a>
            </p>
            <p>
              <a href="#">Back to top</a>
            </p>
          </span>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer