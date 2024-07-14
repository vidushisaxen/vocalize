import React from "react";
import { AccordionSpeakic } from "./AccordionSpeakic";

function Faq() {
  return (
    <> 
      <section className="w-screen h-screen flex justify-around mobile:flex-col  mobile:ml-[5vw] mobile:w-[95%] mobile:mr-[5vw] mobile:h-[100%] tablet:flex-col tablet:ml-[5vw] tablet:w-[95%] table:mr-[5vw] tablet:h-[100%]">
        <div className="flex flex-col w-[24%] mobile:w-[95%] tablet:w-[95%] ">
          <p className="font-medium text-[#9b9b9b] mb-[1vw] text-[1.2vw]">FAQ</p>
          <p className="text-[4.2vw] leading-none font-medium tracking-tighter fadeh2 mobile:text-[7vw]  mobile:w-[70%] mobile:leading-[1.2] tablet:text-[7vw] tablet:w-[70%] tablet:leading-[1.2]">Quick answers to questions you may have</p>
          <p className="text-[1vw] leading-tight text-[#000] mt-[3vw] mobile:text-[3vw] tablet:text-[2vw]">Can t find what you re looking for?</p>
          <p className="text-[1vw] leading-tight text-[#000] mt-[0.5vw] mobile:text-[3vw] tablet:text-[2vw]">Contact us here:</p>
          <div className="mt-[1vw] text-[1.2vw] text-[#ff471d] overflow-hidden w-fit mobile:text-[4vw] tablet:text-[3vw]">
            <a href="#" className="txt relative overflow-hidden w-full">info@speakic.com</a>
            </div>
        </div>
        
        <AccordionSpeakic/>
      </section>
    </>
  );
}

export default Faq;
