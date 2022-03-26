import React from 'react'
import { useSelector } from 'react-redux'
import BookmarkCard from "./BookmarkCard"
import "../styles/BookmarkCard.css"
import {Link} from "react-router-dom"

function Bookmark() {
      const books = useSelector((state)=>state.bookmark.bookmarkList)

      console.log(books)
  return (

    <div className="bookmark-wrapper">
    
      <h2>Your Favourite Recipes</h2>
    
      {books.length !== 0 ? books.map((book)=>{
        return <Link to="/information" state={{state:book}} key={book.id}> <BookmarkCard  data={book}/> </Link>
      }): "no added in the favourite" }
        
    </div>
  )
}

export default Bookmark