import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';

function ChannelRow({image,ChannelName,Subs, vid,ChannelInfo}) {
  return (
    <div className='ChannelRow'>
        <Avatar src={image} className='VideoImage'/>
        <div className="channelRow_text">
            <h2>{ChannelName} </h2>
            <p>{Subs} . {vid}</p>
            <span>{ChannelInfo}</span>
        </div>
        <div className="subscibeOptions">
            <button>Subscribed</button>
            <NotificationsSharpIcon/>
        </div>
    </div>
  )
}

export default ChannelRow