import Image from "next/image";


const PrivacyHero = () => {
  return (
   <>
   <section className=" main-gradient mb-[12%]">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 className="title-1 drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                  Your Privacy, 
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                  Our Priority
                  </span>
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span>
                  At Speakic, safeguarding your privacy is at the heart of everything we do. We are dedicated to protecting your personal information with the highest standards of security and transparency. Our privacy practices are designed to ensure that your data is handled responsibly and used only to enhance your experience with our services. 
                  </span>
                </p>
              </div>

              <div className="absolute w-[61%] right-0 bottom-[5%]">
                <Image
                  className="hero-img"
                  src="/images/privacy-hero.jpg"
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

export default PrivacyHero