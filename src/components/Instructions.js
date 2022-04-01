import React from 'react'

function Instructions({data}) {

  return (
    <div className='ingredient-container'>
         <label>{data.instructions}</label>
    </div>
  )
}

export default Instructions