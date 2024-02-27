import React from 'react'
import styled from 'styled-components'
import Navbar from '@/components/Navbar';


export default function index() {
  return (

    <ParentContainer>
    
    <iframe width={500} height={500} src='https://cdn.htmlgames.com/DailyCrossword/'></iframe>
    </ParentContainer>
     
  )
}

const ParentContainer = styled.div`
    display: flex;  
  
 //   width: 100%;
    background-color: #4db8ff;   
    align-items: center;
    justify-content: center;
    
    //padding-top: 4vw;
`