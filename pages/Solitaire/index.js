import React from 'react'
import styled from 'styled-components'

import Navbar from '@/components/Navbar'

const ParentContainer = styled.div`
    display: flex;
    margin: 0vw;
    padding: 0vw;
    height: 40.8vw;
    background-color: #00802b;
    align-items: center;
    justify-content: center;
` 
export default function index() {
    return (
        <ParentContainer>
          
          <iframe height={500} width={500} src='https://cdn.htmlgames.com/ClassicSolitaire/'></iframe>

        </ParentContainer>
      
    )
  }
