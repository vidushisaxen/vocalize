import React, { useEffect } from "react";
import countries from '../../js/data';

const Translate = () => {
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const exchangeIcon = document.querySelector(".exchange i");
    const selectTag = document.querySelectorAll("select");
    const icons = document.querySelectorAll(".row i");
    const translateBtn = document.querySelector(".translateBtn");

    // Populate the language dropdowns
    selectTag.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "hi-IN"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    // Swap languages when exchange icon is clicked
    exchangeIcon.addEventListener("click", () => {
      let tempText = fromText.value;
      let tempLang = selectTag[0].value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTag[0].value = selectTag[1].value;
      selectTag[1].value = tempLang;
    });

    // Clear translation when fromText is empty
    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    // Handle translation when button is clicked
    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTag[0].value;
      let translateTo = selectTag[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");

      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach((match) => {
            if (match.id === 0) {
              toText.value = match.translation;
            }
          });
          toText.setAttribute("placeholder", "Translation");
        })
        .catch(() => {
          toText.setAttribute("placeholder", "Translation failed");
        });
    });

    // Handle icon click for copy and speech
    icons.forEach((icon) => {
      icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
          navigator.clipboard.writeText(target.id === "from" ? fromText.value : toText.value);
        } else if (target.classList.contains("fa-volume-up")) {
          let utterance = new SpeechSynthesisUtterance(
            target.id === "from" ? fromText.value : toText.value
          );
          utterance.lang = target.id === "from" ? selectTag[0].value : selectTag[1].value;
          speechSynthesis.speak(utterance);
        }
      });
    });
  }, []);

  return (
    <div className="translate-component">
      <div className="translation-container">
        <div className="translation-wrapper">
          <div className="text-input">
            <textarea
              spellCheck="false"
              className="from-text"
              placeholder="Enter text"
            ></textarea>
            <textarea
              readOnly
              spellCheck="false"
              className="to-text"
              placeholder="Translation"
            ></textarea>
          </div>
          <ul className="controls">
            <li className="row from">
              <div className="icons">
                <i id="from" className="fas fa-volume-up" />
                <i id="from" className="fas fa-copy" />
              </div>
              <select></select>
            </li>
            <li className="exchange">
              <i className="fas fa-exchange-alt" />
            </li>
            <li className="row to">
              <select></select>
              <div className="icons">
                <i id="to" className="fas fa-volume-up" />
                <i id="to" className="fas fa-copy" />
              </div>
            </li>
          </ul>
        </div>
        <button className="translateBtn">Translate Text</button>
      </div>
    </div>
  );
};

export default Translate;
