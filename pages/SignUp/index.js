import {useState, useRef, useContext, createContext} from 'react';
import  ReactDOM  from 'react-dom/client';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useStateContext } from '@/context/UserContext';

import {auth} from '/library/firebaseConfig.js';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const ParentContainer = styled.div`
display: grid;
grid-template-column: 10vw;
grid-template-row: 10vw;
width: 96vw;
height: 40vw;
//background-color: black;
justify-content: center;
align-items: center;
border: 0.1vw solid black;
margin-left: 2vw;
`



export default function index() {

  const {user, setUser} = useStateContext();
  const router = useRouter();

  
  const emailRef = useRef();
  const passwordRef = useRef();

  async function SIGNUP(){

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        //
        const user = (userCredential.user);
        setUser(emailRef.current.value)

        //
        console.log(`User ${user.email} logged in successfully` );

        router.push('/Profile');

      } 
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(`Error ${errorCode}: ${errorMessage}`)
      }
      )


{/* <h1>UserName</h1>
    <InformationBar ref={userNameRef}></InformationBar> */}


  }

  return (
    <ParentContainer>

    
        
    <h1>Email</h1>
    <InformationBar ref={emailRef} type="email"></InformationBar>
    
    <h1>Password</h1>
    <InformationBar ref={passwordRef} type="password"></InformationBar>
    
    <button onClick={SIGNUP}>SignUp</button>
    <LoginRedirect onClick={() => router.push('/Login')}> Go to Login</LoginRedirect>
    </ParentContainer>
  )
}

const InformationBar = styled.input`
width: 10vw;
height: 2vw;
`

const LoginRedirect = styled.div`
cursor: pointer;
`
