import React, { useEffect } from 'react'
import {Button} from '@mui/material'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'


function Login() {

  const [state,dispatch] = useStateValue()
  const signIn = () =>{
    auth
    .signInWithPopup(provider)
    .then((result)=>{
      dispatch({
          type:actionTypes.SET_USER,
          user:result.user
      })
      localStorage.setItem('user', JSON.stringify(result.user));
    })
    .catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div className='login'>
        <div className='login__container'>
        <img src='https://media.licdn.com/dms/image/C560BAQGeWFSKnWQ4kQ/company-logo_200_200/0/1661322725529?e=2147483647&v=beta&t=PtXso-FwmuuA_mz8Rtne8AQ_9Rs_FmBFSJLHZ1HiPDQ'/>
        <h1>Sign in to Fyn Mobility Business HQ</h1>
        <p>Business Operations Team</p>
        <Button onClick={signIn}> Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login
