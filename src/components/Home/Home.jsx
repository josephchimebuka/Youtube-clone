import React from 'react'
import './home.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Recommended from '../Recommended/Recommended'


function Home() {
  return (

    <div>
      <Header/>
      <div className="video_section">
      <Sidebar/>
      <Recommended/>
      </div>
      
    </div>
 
  )
}

export default Home
