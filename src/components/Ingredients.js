import React from 'react'
import "../styles/Ingredients.css"

function Ingredients({data}) {

  return (
    <div className='ingredient-container'>
         <label>{data.original}</label>
    </div>
  )
}

export default Ingredients