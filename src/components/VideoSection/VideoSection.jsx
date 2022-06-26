import React from 'react'
import ChannelRow from '../ChannelRow/ChannelRow'
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import './VideoSection.css'
import VideoRow from '../VideoRow/VideoRow';
function VideoSection() {
  return (
    <div className='VideoSection'>
        <div className="filterSection">
            <TuneSharpIcon className='filterIcon'/> 
            <h4>Filters</h4>
        </div>
        <hr/>
        <ChannelRow
        image='https://yt3.ggpht.com/Fn_Cr7IPK_xyDOH9qfPM71OYt7DUkU2h7EGvZ4EZgvuWFR5zLDlFXlVRhzv7gwK6TcFQ-VpPkQ=s176-c-k-c0x00ffffff-no-rj-mo'
        ChannelName='Matte Showroom'
        Subs='16 subscibers'
        vid='1 video'
        ChannelInfo='We are a community of creative designers and developers seeking to become better at our craft and thereby pushing the web ... '
        />
        <VideoRow
        image='https://i.ytimg.com/an_webp/4YyWlNB14q4/mqdefault_6s.webp?du=3000&sqp=CILz4pUG&rs=AOn4CLBXTjBmquq2F6am5I2fazlOJEcMbg'
        VideoHeading='https://yt3.ggpht.com/ytc/AKedOLQfSv8Q64RHRMc1n8SS8KpDjp94-bIScaXHG-YlrsI=s68-c-k-c0x00ffffff-no-rj'
        Subs='26k views'
        Time='11 months'
        channel_avatar='https://yt3.ggpht.com/ytc/AKedOLQfSv8Q64RHRMc1n8SS8KpDjp94-bIScaXHG-YlrsI=s68-c-k-c0x00ffffff-no-rj'
        ChannelName='Mike Supercars top speed'
        VideoDescription='Lamborghini Aventador S - Black Matte BULL - Walkaround Interior Exterior - Start Up at Lamborghini Miami Top 14 Lamborghini ...'/>
        
    </div>
  )
}

export default VideoSection