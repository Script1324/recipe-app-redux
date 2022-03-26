import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/Profile.css"
import Home from './Home'
import Bookmark from './Bookmark'
import AboutUs from './AboutUs'
import SideNav from './SideNav'
import Header from './Header'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Information from './Information'

function Profile() {
    const dispatch = useDispatch()

  

    const state =  useSelector((state)=>state.user.value)
   
  return (
    <div>
        <div className="profile-container">
           
           
             <SideNav/>            
             <div className='profile-content'>
                <Header/>
              <div className='contents'>
                <Routes>
                  
                   <Route path="/" element={<Home/>}/>
                   <Route path="/bookmark" element={<Bookmark/>}/>
                   <Route path="/about" element={<AboutUs/>}/>
                   <Route path='/information' element={<Information/>} />
                  

                </Routes>
              </div>
            
            </div>



        </div>

      {/*       
      Profile
        <h3>{state.email}</h3>

        <button onClick={LogOut}>Log out</button> */}
    </div>
  )
}

export default Profile