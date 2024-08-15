import React from "react";

const LearningOptions = (props) => {
    const options = [
      {
        text: "Learning",
        handler: props.actionProvider.handleJavascriptList,
        id: 1,
      },
      { text: "Conversion", handler: () => {}, id: 2 },
      { text: "Translation", handler: () => {}, id: 3 },
      { text: "About", handler: () => {}, id: 4 },
      { text: "Contact", handler: () => {}, id: 5 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
export default LearningOptions;

