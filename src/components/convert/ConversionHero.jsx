import Image from "next/image";


const ConversionHero = () => {
  return (
   <>
   <section className=" main-gradient mb-[12%]">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 className="title-1 drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                  Transforming Words:  
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                  Speak and 
                  </span>
                  <br/>
                  <span className="leading-[1.2] overflow-hidden">
                  Listen with Ease
                  </span>
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span>
                  Speakic offers cutting-edge solutions for seamless communication with our advanced Speech-to-Text and Text-to-Speech converters. Whether you need to transcribe spoken words into text or convert written content into natural-sounding speech, our tools are designed to deliver accuracy and efficiency. Our technology supports a wide range of languages and dialects, ensuring that your communication needs are met with precision. 
                  </span>
                </p>
              </div>

              <div className="absolute w-[100%] right-0 bottom-[5%]">
                <Image
                  className="hero-img"
                  src="/images/learning-hero.jpg"
                  alt="Hero Image"
                  width= {1000}
                  height= {1000}
                />
              </div>
              
            </div>
          </div>
        </section>
   </>
  )
}

export default ConversionHero;