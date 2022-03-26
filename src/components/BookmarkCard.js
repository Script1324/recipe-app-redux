import React from 'react'
import "../styles/BookmarkCard.css"
import CloseIcon from '@mui/icons-material/Close';
import {removeBookmark} from "../actions/bookmark"
import { useDispatch } from 'react-redux';

function BookmarkCard({data}) {
        const dispatch =  useDispatch()

  return (
     <div className='bookmark-container'>
        <div className='bookmark-img'>
            <div className='remove-bookmark'>
                <CloseIcon style={{color:"white"}} onClick={()=> dispatch(removeBookmark(data.id))}/>
            </div>
            <img src={data.image} alt='recipe iamge'/>
        </div>  

        <div className='bookmark-description'>

            <p>{data.title}</p>
            <p>2022</p>

        </div>
    </div>
    
  )
}

export default BookmarkCard