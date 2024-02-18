import React from 'react'
import styled from 'styled-components'
import React, {useState} from 'react';



const [name, setName] = setName('Home');

function ChangeName(){
    setName(() => name
)
}

const Navbar = () => {
  return (
    <Container>
        <LogoBox> 
            Text Logo
        </LogoBox>
        <ButtonHolder>
            <Buttons> Home </Buttons>
            <Buttons> Menu </Buttons>
            <Buttons> Hello </Buttons>
            <Buttons> Chicken </Buttons>
        </ButtonHolder>
        
    </Container>
  )
}


const Container = styled.div`
    width: 96vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: gainsboro;

    padding-right: 2vw;
    padding-left: 2vw;
    padding-top: 1vw;
    padding-bottom: 1vw;

    align-items: center;
`
const LogoBox = styled.div`
    font-size: 2vw; 
    font-weight: bold;

`

const ButtonHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;

    
`

const Buttons = styled.button`
    cursor: pointer;
    font-size: 2vw;
    border-radius: 0.5vw;
    transtion: 0.5s ease-all;


    &:hover{
        background-color: yellow;
    }
`

export default Navbar