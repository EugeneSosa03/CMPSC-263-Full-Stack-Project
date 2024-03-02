import {useState, useRef, useContext, createContext, useEffect} from 'react';
import  ReactDOM  from 'react-dom/client';
import {useRouter} from 'next/navigation'; 
import styled from 'styled-components';
import { useStateContext } from '@/context/UserContext';
import {auth} from '/library/firebaseConfig.js';
import {signInWithEmailAndPassword } from 'firebase/auth';

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

  const router = useRouter();

  const {user, setUser} = useStateContext();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {

    if (user != null){
      router.push('/Profile');
    }
  })


  async function LOGIN(){

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
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
  }

  return (
    <ParentContainer>

    <h1>Email</h1>
    <InformationBar ref={emailRef} type="email"></InformationBar>
    
    <h1>Password</h1>
    <InformationBar ref={passwordRef} type="password"></InformationBar>
    
    <button onClick={LOGIN}>Login</button>
    <SignUpRedirect onClick={() => router.push('/SignUp')}> Go to Sign Up</SignUpRedirect>
    
    </ParentContainer>
  )
}

const InformationBar = styled.input`
width: 10vw;
height: 2vw;
`
const SignUpRedirect = styled.div`
cursor: pointer;
`