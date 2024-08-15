import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(text);
      setUtterance(u);

      const voicesChangedHandler = () => {
        const voices = synth.getVoices();
        setVoice(voices[0]);
      };

      synth.addEventListener("voiceschanged", voicesChangedHandler);

      return () => {
        synth.cancel();
        synth.removeEventListener("voiceschanged", voicesChangedHandler);
      };
    }
  }, [text]);

  const handlePlay = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const synth = window.speechSynthesis;

      if (isPaused) {
        synth.resume();
      } else {
        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        synth.speak(utterance);
      }

      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const synth = window.speechSynthesis;
      setIsPaused(true);
      synth.pause();
    }
  };

  const handleStop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const synth = window.speechSynthesis;
      setIsPaused(false);
      synth.cancel();
    }
  };

  const handleVoiceChange = (event) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const voices = window.speechSynthesis.getVoices();
      setVoice(voices.find((v) => v.name === event.target.value));
    }
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div>
      <label>
        Voice:
        <select value={voice?.name || ""} onChange={handleVoiceChange}>
          {typeof window !== "undefined" &&
            window.speechSynthesis &&
            window.speechSynthesis.getVoices().map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
        </select>
      </label>

      <br />

      <label>
        Pitch:
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={handlePitchChange}
        />
      </label>

      <br />

      <label>
        Speed:
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />
      </label>
      <br />
      <label>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>

      <br />

      <div className="flex w-[30vw] items-center justify-between mt-[2vw]">
        <button
          onClick={handlePlay}
          className="px-[30px] py-[10px] bg-[#88038F] border-[2px] border-[#88038F] text-[#fff] rounded-[10px]  hover:bg-[#FFF] hover:text-[#88038F]"
        >
          {isPaused ? "Resume" : "Play"}
        </button>
        <button
          onClick={handlePause}
          className="px-[30px] py-[10px] bg-[#88038F] border-[2px] border-[#88038F] text-[#fff] rounded-[10px]  hover:bg-[#FFF] hover:text-[#88038F]"
        >
          Pause
        </button>
        <button
          onClick={handleStop}
          className="px-[30px] py-[10px] bg-[#88038F] border-[2px] border-[#88038F] text-[#fff] rounded-[10px]  hover:bg-[#FFF] hover:text-[#88038F]"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;
