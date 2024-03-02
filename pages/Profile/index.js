import React, {useContext, useEffect, useState} from 'react'
import { useStateContext } from '@/context/UserContext'
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import styled from 'styled-components';


const ParentContainer = styled.div`

`



export default function index() {

  const {user, setUser} = useStateContext();

  const router = useRouter();



  function SignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Successfully Logged Off");
    setUser(null);
    router.push('/');

    }).catch((error) => {
    // An error happened.
    });
}  

  return (
    <ParentContainer>

    <button onClick={SignOut}>SignOut</button>
    <div>{user}</div>

    </ParentContainer>
   
  )
}
