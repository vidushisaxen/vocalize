import '../styles/globals.css';
import { ReactLenis } from '@studio-freight/react-lenis';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Speakic</title>
        <link href="/icons/favicon.svg" rel="icon" />
        <meta property="og:title" content="Speakic" key="title" />
        <meta property="og:description" content="Eliminating language barriers" key="description" />
        <meta name="description" content="Eliminating language barriers" />
      </Head>
      <ReactLenis root>
        <Component {...pageProps} />
      </ReactLenis>
    </>
  );
}
