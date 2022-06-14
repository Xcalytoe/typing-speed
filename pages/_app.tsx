import "../styles/globals.css";
import "../public/assets/fonts/stylesheet.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../components/style/GlobalStyle.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
