import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookmarkCard from "./BookmarkCard"
import "../styles/BookmarkCard.css"
import {Link} from "react-router-dom"
import { onSnapshot } from 'firebase/firestore'
import { collection, query } from 'firebase/firestore'
import {db}  from "../firebase/FirebaseConfig"
import { addToBookmark } from '../actions/bookmark'


function Bookmark() {

    const dispatch = useDispatch()

  const[bookmark,setBookmark] = useState([])

      const books = useSelector((state)=>state.bookmark.bookmarkList)
      const userID = useSelector((state) => state.user.value.id)
     
      useEffect(()=>{
          snapData();


          //this will trigger whenn we unmount our component
          return () => {
              //we set the state to an empty value so the page won't rerender
              setBookmark([])
          } 

      },[])

      const q = query(collection(db,`users/${userID}/UsersData`))
      const snapData = () =>{
        
        onSnapshot(q,(snap)=>{       
          setBookmark(snap.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            }))
    
      })
    
      }
 



  return (

    <div className="bookmark-wrapper">
    
      <h2>Your Favourite Recipes</h2>
        
      {bookmark.length !== 0 ? bookmark.map((book)=>{
        return  <BookmarkCard  key={book.id} data={book}/> 
      }): "no added in the favourite" }
        
    </div>
  )
}

export default Bookmark