import React, {createContext, useContext, useState, useEffect} from 'react';
import { useStateContext } from '@/context/UserContext';
import styled from 'styled-components';
import Link from 'next/link';


const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState("Login");
    const {user, setUser} = useStateContext();

    useEffect (() => {

    if (user != null){
        setLoggedIn("Profile");
    } else{
        setLoggedIn("Login");
    }

    })
    

  

  return (

    <NavBarContainer>
       <Link href="/"> <LogoBox> 
            Classic Game Hub
        
            </LogoBox>
        </Link>
        <ButtonHolder>
           
            <Link href="/Login"><Buttons>{loggedIn}</Buttons></Link>
        
        </ButtonHolder>

    </NavBarContainer>
  )
}

const NavBarContainer = styled.div`
    width: 100%;
    height: 5vw;
    display: flex;
  //  flex-direction: row;
    justify-content: space-between;
    background: gainsboro;

    // padding-right: 2vw;
    // padding-left: 2vw;
    // padding-top: 1vw;
    // padding-bottom: 1vw;

     align-items: center;
`


const LogoBox = styled.div`
    font-size: 4vw; 
    font-weight: bold;
    //background: white;
    border: 0.1 solid black;
    border-radius: 0.1vw;

`

const ButtonHolder = styled.div`
 
    display: flex;
    align-items: center;
    gap: 1vw;
    
`

const Buttons = styled.button`
    padding: 0.25vw;

    cursor: pointer;
    font-size: 2vw;
    border-radius: 0.5vw;
    transtion: 0.5s ease-all;
    }
`

export default Navbar