import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../js/ActionProvider';
import MessageParser from '../js/MessageParser';
import config from '../js/config';

const Chat = () => {
  return (
    <>
    <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
    </>
  )
}

export default Chat