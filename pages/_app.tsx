import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import Nav from "components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Slamsgiving</title>
      </Head>
      <div className="h-screen flex flex-col">
        <Nav />
        <Component {...pageProps} styles={{ height: "100%" }} />
      </div>
    </>
  );
}

export default MyApp;
