import { Avatar } from '@mui/material'
import React from 'react'
import './Videocard.css'

function VideoCard({image,channel_image,title, channel_description,Views, Timestamp}) {
  return (
    <div className='video_container'>
        <img src={image} className='video_image' alt="" />
       <div className="text-container">
       <div className="video_info">
            <Avatar src={channel_image}/>
        </div>
        <div className="text_info">
                <h4>{title}</h4>
                <p>{channel_description}</p>
                <p>{Views} . {Timestamp}</p>
            </div>
       </div>
    </div>
  )
}

export default VideoCard