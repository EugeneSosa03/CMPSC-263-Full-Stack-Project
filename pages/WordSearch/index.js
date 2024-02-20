import React from 'react'
import styled from 'styled-components'
import Navbar from '@/components/Navbar'




export default function index() {
    return (
      <NavBarContainer>
  
      <Navbar/>
        <iframe src='https://cdn.htmlgames.com/DailyWordSearch/'></iframe>
      </NavBarContainer>
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