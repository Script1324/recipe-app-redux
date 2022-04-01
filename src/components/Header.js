import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import {auth} from "../firebase/FirebaseConfig"
import {signOut} from "firebase/auth"
import {logout} from "../actions/user"
import { useRef } from 'react';
import {  toast } from 'react-toastify';

function Header() {

    const iconStyle = {
        borderRadius:"10px",
        backgroundColor:"rgb(26, 14, 58)",
        padding:"7px",
        width:"40px",
        color:"white",
        height:"40px",
        marginRight:"10px"
    } 
    
    const LogOut = async() =>{
        await signOut(auth)
        toast("succesfully logout")
     
     }

     const inputRef = useRef(null)

     const focus = () =>{
        inputRef.current.focus()
     }


  return (
    
          <header>
                    <div className='profile-search'>
                     <SearchIcon style={iconStyle} onClick={focus}/>
                     <input type="text" placeholder="search for new recipes" ref={inputRef}/>

                    </div>
                   
                    <div className='header-icons'>
                        <CircleNotificationsIcon style={iconStyle}/>
                        <ExitToAppIcon style={iconStyle} onClick={LogOut}/>
                    </div>
            </header>

  )
}

export default Header