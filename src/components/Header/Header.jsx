import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import "./header.css"
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Header() {
  const [inputValue, setinputValue] = useState("")
  return (
    <div className='Header'>
     <div className="header_left">
     <MenuIcon/>
     <Link to='/'>
       <img className='logo' src="data:image/png;base64,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" alt="" />
     </Link>
       
     </div>
    <div className="header_center">
    <div className="header_middle">
      <input 
      onChange={(e)=>setinputValue(e.target.value)}
      type="text" 
      placeholder='Search' 
      value={inputValue}
      className='input' />
     <div className="search">
     <Link to='/services'>
     <SearchIcon className='search-icon'/>
     </Link>
    
     </div>
    
     </div>
     <KeyboardVoiceIcon className='mic'/>
    </div>
     <div className="header_right">
      <VideoCallIcon/>
      <AppsIcon/>
      <NotificationsNoneIcon/>
      <Avatar
      src="https://yt3.ggpht.com/yti/APfAmoH0RAQ40zkvQ6-OjZko-GjseT6U1EuHMS8gRCn4rw=s88-c-k-c0x00ffffff-no-rj-mo"
      />
     </div>
    </div>

  )
}

export default Header