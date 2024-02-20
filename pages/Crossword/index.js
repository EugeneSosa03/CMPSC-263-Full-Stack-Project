import React from 'react'
import styled from 'styled-components'
import Navbar from '@/components/Navbar';


const ParentContainer = styled.div`
    margin: 0vw;
    padding: 0vw;
`


export default function index() {
  return (

    <ParentContainer>
    
    <NavBarContainer>

    <Navbar/>

    </NavBarContainer>

    <iframe src='https://cdn.htmlgames.com/DailyWordSearch/'></iframe>

    </ParentContainer>
    
    
    
  
  )
}


const NavBarContainer = styled.div`
    width: 96vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: gainsboro;

    padding-right: 2vw;
    padding-left: 2vw;
    padding-top: 1vw;
    padding-bottom: 1vw;

    // align-items: center;
    `