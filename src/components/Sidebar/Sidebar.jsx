import React from 'react';
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='Sidebar_labels'>
        <HomeIcon/> <h3 id='selected' className='iconTag'>Home</h3>
        </div>
        <div className='Sidebar_labels'>
        <ExploreIcon/> <h3 className='iconTag'>Explore</h3>
        </div>
        <div className='Sidebar_labels'>
        <SubscriptionsIcon/> <h3 className='iconTag'>Subscriptions</h3>
        </div>
        <hr/>
        <div className='Sidebar_labels'>
        <VideoLibraryIcon/> <h3 className='iconTag'>Library</h3>
        </div> 
       
        <div className='Sidebar_labels'>
        <HistoryIcon/> <h3 className='iconTag'>History</h3>
        </div>
     
        <div className='Sidebar_labels'>
        <OndemandVideoIcon /> <h3 className='iconTag'>Your videos</h3>
        </div>
       
        <div className='Sidebar_labels'>
        <HistoryIcon/> <h3 className='iconTag'>Watch later</h3>
        </div>
        
        <div className='Sidebar_labels'>
        <ThumbUpIcon/> <h3 className='iconTag'>Liked videos</h3>

        </div>
      
        <div className='Sidebar_labels'>
        <ExpandMoreIcon/> <h3 className='iconTag'>Show more</h3>
        </div>
      <hr/>
    </div>
  )
}

export default Sidebar