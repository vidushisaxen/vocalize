import "@/styles/globals.css";
import '@/styles/login.css';
import '@/styles/translate.css'
import '@/styles/chatbot.css'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
   <Head>
    <title>Vocalize</title>
    <link href="/icons/favicon.svg" rel="icon"/>
    <meta property="og:title" content="Speakic" key="title"></meta>
    <meta property="og:description" content="Elimination language barriers" key="description"></meta>
    <meta name="description" content="Elimination language barriers"></meta>
  </Head>
  <ReactLenis root>
  <Component {...pageProps} />
  </ReactLenis>
    </>
   
);
}
