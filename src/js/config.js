import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "../components/LearningOptions";
import LinkList from "../components/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, How may I help you with?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#88038F",
    },
    chatButton: {
      backgroundColor: "#88038F",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Learning",
            url:
              "https://speakic-learn.vercel.app/",
            id: 1,
          },
          {
            text: "Conversion",
            url:
              "https://speakicspeech.vercel.app/",
            id: 2,
          },
          {
            text: "Translation",
            url: "https://speakic-translate.vercel.app/",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;