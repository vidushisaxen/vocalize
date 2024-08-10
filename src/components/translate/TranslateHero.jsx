import Image from "next/image";


const TranslateHero = () => {
  return (
   <>
   <section className=" main-gradient mb-[12%]">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 className="title-1 drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                  Seamless Translation 
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                  Solutions for a 
                  </span>
                  <br/>
                  <span className="leading-[1.2] overflow-hidden">
                  Global Audience
                  </span>
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span>
                  At Speakic, our translation services are designed to bridge language gaps and connect cultures effortlessly. With a team dedicated to excellence, we ensure that every translation is not only accurate but also contextually relevant.
                  </span>
                </p>
              </div>

              <div className="absolute w-[100%] right-0 bottom-[5%]">
                <Image
                  className="hero-img"
                  src="/images/translation-hero.webp"
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

export default TranslateHero;