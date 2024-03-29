import Head from "next/head";    
//import Image from "next/image";
import Navbar from "@/components/Navbar";
import Gamebar from "@/components/Gamebar";

import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import Link from 'next/link';


const ParentContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  padding: 0vw;
  margin: 0vw;
`

const QuoteContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export default function Home() {


  const [quote, setQuote] = useState("Inspirational Quote Here");


  async function getQuotes(){
  const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '61156e88a8mshfa79bb92b5ddf34p195e25jsnc13b1e151059',
      'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setQuote(result.text);
    console.log(result.text);
  } catch (error) {
    console.error(error);
  }
  }

  useEffect(() => {

    getQuotes();
  })

  return (
    <>
      <Head>
        <title>Classic Game Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <ParentContainer>


    <QuoteContainer>

  <h1>{quote}</h1>

  </QuoteContainer>
      <Gamebar/>
      
      
    </ParentContainer>
   
      </>
  );
}



