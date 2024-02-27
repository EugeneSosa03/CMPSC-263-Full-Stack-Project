import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image';
import WordSearchPic from "../dailywordsearch200.webp";

const Gamebar = () => {
    return (
        <Container>
            
            <GameButtons><a href="/Sudoku">Sudoku</a></GameButtons>
            <GameButtons><Link href="/WordSearch">Word Search</Link>
            </GameButtons>
            <GameButtons><Link href="/Crossword">Crossword</Link></GameButtons>
            <GameButtons><Link href="/Solitaire">Solitaire</Link></GameButtons>
         
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