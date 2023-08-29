import React from 'react'
import './Sidebar.css'
import { Button } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
        <Button> Option1</Button>
        <Button> Option2</Button>
        </div>
      </div>
        
    </div>
  )
}

export default Sidebar