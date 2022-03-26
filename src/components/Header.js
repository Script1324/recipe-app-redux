import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import {auth} from "../firebase/FirebaseConfig"
import {signOut} from "firebase/auth"
import {logout} from "../actions/user"

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
        alert('succesfully log out')
     
     }

  return (
    
          <header>
                    <div className='profile-search'>
                     <SearchIcon style={iconStyle}/>
                     <input type="text" placeholder="search for new recipes"/>

                    </div>
                   
                    <div className='header-icons'>
                        <CircleNotificationsIcon style={iconStyle}/>
                        <ExitToAppIcon style={iconStyle} onClick={LogOut}/>
                    </div>
            </header>

  )
}

export default Header