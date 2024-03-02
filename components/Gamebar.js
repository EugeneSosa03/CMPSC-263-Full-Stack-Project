import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image';
import WordSearchPic from "../dailywordsearch200.webp";

const Gamebar = () => {
    return (
        <Container>
            
            
        <Link href="/Sudoku"> <GameButtons> Sudoku</GameButtons>    </Link>
        <Link href="/WordSearch"><GameButtons>WordSearch</GameButtons></Link>
            
        <Link href="/Crossword"><GameButtons>Crossword</GameButtons></Link>
        <Link href="/Solitaire"> <GameButtons>Solitaire</GameButtons></Link>
         
        </Container>
    )
}

const Container = styled.div`
display: grid;
grid-template-columns: 10vw 10vw ;
height: 30vw;
width: 50vw;
align-items: center;
justify-content: space-evenly;
margin: 2vw;
border: 0.1vw solid black;
`

const GameButtons = styled.button`
display: flex;
width: 10vw;
height: 10vw;

//margin: 1vw;
padding: 1vw;

border: 0.1vw solid black;
cursor: pointer;
font-size: 2vw;
border-radius: 0.5vw;
transtion: 0.5s ease-all;
justify-content: center;
align-items: center;
`

export default Gamebar