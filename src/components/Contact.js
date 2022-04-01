import React from 'react'
import "../styles/Contact.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

function Contact() {
  return (
    <div className="contact-container">
          <h2>Contact Us</h2>
          <div className='contact-icons'>
                <div>
                      <LocalPhoneIcon/>
                      <p>Phone : 0923473289</p>
                </div>
                <div>
                    <FacebookOutlinedIcon/>
                    <p>Warren Gaytero</p>
                </div>
                <div>
                      <AddLocationAltOutlinedIcon/>
                        <p>Bacolod City</p>
                </div>
          </div>
    </div>
  )
}

export default Contact