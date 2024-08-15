import React, { useState } from "react";
import TextToSpeech from "./TextToSpeech";
const ToSpeech=()=>{
    const [userInput, setUserInput] = useState("");
   
    return (
      <>
        {/* <NavSide></NavSide> */}
        <div className="to-speech-body flex items-center justify-center flex-col mt-[7vw]">
          {/* <div className="heading mb-10">Text-To-Speech</div> */}
          <textarea
            value={userInput}
            cols="80"
            rows="10"
            onChange={(event) => setUserInput(event.target.value)}
            className="border-[2px] border-[#88038F] mb-[2vw] outline-none rounded-[10px] p-[30px] mobile:w-[70vw] mobile:mb-[30px]"

          ></textarea>
          <TextToSpeech text={userInput} />
        </div>
      </>
    );
}

export default ToSpeech;