import Image from "next/image";


const BlogsHero = () => {
  return (
   <>
   <section className=" main-gradient mb-[12%]">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 className="title-1 drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                  Explore, Learn, and Master:
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                  Dive into Our 
                  </span>
                  <br/>
                  <span className="leading-[1.2] overflow-hidden">
                  Language Learning Blogs
                  </span>
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span>
                  Join us as we explore the ever-evolving world of language learning. From expert tips and innovative tools to inspiring success stories, our blog is your go-to resource for mastering new languages and deepening your understanding of diverse cultures.
                  </span>
                </p>
              </div>

              <div className="absolute w-[61%] right-0 bottom-[5%]">
                <Image
                  className="hero-img"
                  src="/images/blog-hero.jpg"
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

export default BlogsHero