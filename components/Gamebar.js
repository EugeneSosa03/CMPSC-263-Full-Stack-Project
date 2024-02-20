import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import WordSearchPic from "../dailywordsearch200.webp"


const Gamebar = () => {
    return (
        <Container>
            <GameButtons><Link href="/Sudoku">Sudoku</Link></GameButtons>
            <GameButtons><Link href="/WordSearch">Word Search</Link></GameButtons>
            <GameButtons><Link href="/Crossword">Crossword</Link></GameButtons>
            <GameButtons><Link href="/Solitaire">Solitaire</Link></GameButtons>
        </Container>
    )
}

const Container = styled.div`
display: grid;
align-items: center;
grid-template-columns: 10vw 10vw ;

width: 30vw;
height: 30vw;
justify-content: space-between;
padding: 5vw;

border: 0.5vw solid black;
`

const GameButtons = styled.button`
width: 10vw;
height: 10vw;

padding: 0.25vw;

cursor: pointer;
font-size: 2vw;
border-radius: 0.5vw;
transtion: 0.5s ease-all;

`
export default Gamebar