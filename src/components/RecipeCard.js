import React from 'react'
import "../styles/RecipeCard.css"

function RecipeCard({data}) {
  return (
            
            <div className='recipecard-container'>
                    <div className='recipecard-img'>
                        <img src={data.image} alt='recipe iamge'/>
                    </div>  

                     <div className='recipecard-description'>

                        <p>{data.title}</p>
                        <p>2022</p>

                     </div>
            </div>

  )
}

export default RecipeCard