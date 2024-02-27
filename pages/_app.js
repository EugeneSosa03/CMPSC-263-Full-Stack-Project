import { createGlobalStyle } from "styled-components";
import {Noto_Sans_Georgian} from 'next/font/google';
import Navbar from "@/components/Navbar";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
`
const Georgia = Noto_Sans_Georgian({subsets: ['georgian']})

export default function App({ Component, pageProps }) {
 
  return( 
    <>
      <style jsx global>{`
        * {
          font-family: ${Georgia.style.fontFamily};
        }
      `}</style>
    <GlobalStyle />
    <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
