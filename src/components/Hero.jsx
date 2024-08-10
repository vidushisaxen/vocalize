import React from 'react'
const Hero = () => {
  return (
    <section className=" mb-[12%] hero-container">
    <div className="px-[10%] relative">
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 className="title-1 aeonik drop-shadow-md  leading-[1]">
            <span className="leading-[1.2] overflow-hidden">
            {/* Join Our Mission to Create a  */}
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden">
            {/* Healthier World */}
            </span>
          </h1>
          <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
            <span>
            {/* Be a part of a team making a meaningful difference in healthcare. */}
            </span>
          </p>
        </div>
        </div>
      </div>
  </section>
  )
}

export default Hero