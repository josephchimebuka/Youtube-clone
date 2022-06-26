import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import VideoSection from '../VideoSection/VideoSection'
import './Searchpage.css'


function SearchPage() {
  return (
    <div className='SearchPage'>
        <Header/>
    {/* <h1> Search page 🔎</h1> */}
    <div className="displaySection">
    <Sidebar/>
    <VideoSection/>
    </div>
  
    </div>
  )
}

export default SearchPage