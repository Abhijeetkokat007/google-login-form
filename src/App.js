
import './App.css';
import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
function App() {
  // const login = useGoogleLogin({

  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
 
  return (
    <>
    <div className='login-container'>
    <GoogleLogin className='login-containr'
    onSuccess={credentialResponse => {
      const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
      console.log(credentialResponseDecoded);
      setName(credentialResponseDecoded.name)
      setEmail(credentialResponseDecoded.email)
      setPicture(credentialResponseDecoded.picture)
    }}
    onError={() => {
      console.log('Login Failed')
      
    }}
  />
  <img src={picture} className='img-profile'/>
  <h4>Name: {name} </h4>
  <p>Email: {email}</p>
    </div>
    </>

  // <button onClick={() => login()}>Sign in with Google 🚀</button>
  )
}

export default App;
