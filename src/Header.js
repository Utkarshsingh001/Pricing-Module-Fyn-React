import React from 'react'
import 'react-sticky-header/styles.css';
import './Header.css'
import { useStateValue } from './StateProvider'
import {Button} from '@mui/material'
import { actionTypes } from './reducer';

function Header() {

    const [state,dispatch] = useStateValue()
    const [{user}]= useStateValue()
    const signout =()=>{
        dispatch(
          {
            type:actionTypes.LOGOUT,
            user:null
        }
        )
        localStorage.removeItem('user')
      }
  return (
    <div className='header'>
        <img className='logo' src='https://images.yourstory.com/cs/images/companies/Fyn-1674115157757.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff'/> 
        <img className='profile' src={user.photoURL} alt='profile'/>  
        <Button onClick={signout}>Signout</Button>
    </div>
  )
}

export default Header