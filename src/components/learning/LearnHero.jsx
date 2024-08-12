import Image from "next/image";


const LearnHero = () => {
  return (
   <>
   <section className=" main-gradient mb-[12%]">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 className="title-1 drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                  Unlock New Languages 
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                  with Speakic&apos;s 
                  </span>
                  <br/>
                  <span className="leading-[1.2] overflow-hidden">
                  Learning Solutions
                  </span>
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span>
                  At Speakic, we believe that learning a new language should be an engaging and enriching experience. Our language learning programs are carefully designed to cater to learners of all levels, from beginners to advanced speakers. By combining innovative teaching methods with interactive tools, we make the learning process enjoyable and effective.
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

export default LearnHero;