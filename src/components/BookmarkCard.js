import React from 'react'
import "../styles/BookmarkCard.css"
import CloseIcon from '@mui/icons-material/Close';
import {removeBookmark} from "../actions/bookmark"
import { useDispatch } from 'react-redux';
import { deleteDoc,doc } from 'firebase/firestore';
import {db} from "../firebase/FirebaseConfig"
import {useSelector} from "react-redux"
import { toast } from 'react-toastify';
import {Link} from "react-router-dom"

function BookmarkCard({data}) {
        const dispatch =  useDispatch()
        const userID = useSelector((state)=>state.user.value.id)

        const removeItem = async(id) =>{
                await deleteDoc(doc(db,`users/${userID}/UsersData/${id}`))
                toast.success('sucessfully removed item')
        }

  return (
     <div className='bookmark-container'>
        <div className='bookmark-img'>
            <div className='remove-bookmark'>
                <CloseIcon style={{color:"white",cursor:"pointer"}} onClick={()=> removeItem(data.id)}/>
            </div>
            <Link to="/information" state={{state:data}}  style={{textDecoration:"none"}}>   <img src={data.image} alt='recipe iamge'/> </Link>
        </div>  

        <div className='bookmark-description'>

            <p>{data.title}</p>
            <p>2022</p>

        </div>
    </div>
    
  )
}

export default BookmarkCard