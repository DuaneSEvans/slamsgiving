import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Slamsgiving</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
