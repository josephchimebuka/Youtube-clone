import { Avatar } from '@mui/material'
import React from 'react'
import './VideoRow.css'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

function VideoRow({image,VideoHeading, VideoDescription,Subs, Time,channel_avatar,ChannelName}) {
  return (
    <div className='VideoRow'>
       <div className="VideoContainer">
        <img src={image} alt="" />
        <div className="description_container">
          <h2>{VideoDescription}</h2>
          <p>{Subs} . {Time}</p>
          <div className="avatar_section">
          <Avatar src={channel_avatar}/> <p>{ChannelName} <CheckCircleSharpIcon className='verified'/></p>
          </div>
          <span>{VideoDescription}</span>
        </div>
       </div>
    </div>
  )
}

export default VideoRow