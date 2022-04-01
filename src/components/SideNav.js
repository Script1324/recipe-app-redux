import React,{useState} from 'react'
import "../styles/SideNav.css"
import {Link} from "react-router-dom"
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


function SideNav() {

    const [display,setDislplay] = useState(false)

    const toggleMenu = ()=>{
        setDislplay(!display)
    }

    const iconStyle = {
        borderRadius:"10px",
        backgroundColor:"rgb(45, 42, 80)",
        padding:"7px",
        width:"40px",
        height:"40px"
    } 
    

  return (
    <nav className={display? 'active' : ""}>
            <div className='hamburger'>
                <MenuOpenOutlinedIcon onClick={toggleMenu} style={iconStyle}/>
            </div>

            <ul>
               <Link to="/" style={{textDecoration:"none",color:"white"}}> <li><CottageOutlinedIcon style={iconStyle}/>
               <span className={display ? "active":""}>Home</span></li> </Link>

               <Link to="/bookmark" style={{textDecoration:"none",color:"white"}}> <li><BookOutlinedIcon style={iconStyle}/> <span className={display ? "active":""}>  Bookmark</span> </li></Link>
                <Link to="/about" style={{textDecoration:"none",color:"white"}}> <li><InfoOutlinedIcon style={iconStyle}/> <span className={display ? "active":""}>About</span></li> </Link>
               <Link to="/contact"> <li style={{textDecoration:"none",color:"white"}}><LocalPhoneIcon style={iconStyle}/><span className={display ? "active":""}>Contact</span > </li> </Link>
                
            </ul>
    </nav>
  )
}

<style>

</style>
export default SideNav