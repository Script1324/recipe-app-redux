import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/Information.css"
import {useDispatch, useSelector} from "react-redux"
import {getRecipeDetails} from "../actions/recipes"
import Ingredients from './Ingredients'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {Link} from "react-router-dom"
import {addToBookmark,removeBookmark} from "../actions/bookmark"


function Information() {
    const {state} = useLocation().state;
    const api_key = "da777f54977a456c8a14fbd7665d404a"
 
    const dispatch =  useDispatch()
    const recipeDetails =  useSelector((state)=> state.recipe.recipeDetails)
    //fetch the specific recipoe to get more of its inforamation     
    useEffect(()=>{

        const getRecipeInfo = async() =>{
            const data = await fetch(`https://api.spoonacular.com/recipes/${state.id}/information?apiKey=${api_key}`)
            const json = await data.json()
            console.log(json)
            dispatch(getRecipeDetails(json))
        } 
        getRecipeInfo()
    },[state])

 
    const iconStyle = {
      borderRadius:"10px",
      backgroundColor:"rgb(26, 14, 58)",
      padding:"7px",
      width:"40px",
      color:"white",
      height:"40px",
      marginRight:"20px"
  } 

    const booklist = useSelector((state)=>state.bookmark.bookmarkList)

  const checkExist = (id) =>{
        
      const exist = booklist.find((list)=> list.id == id)

      if(exist){
          dispatch(removeBookmark(exist.id))
          alert('succesfully remove to bookmark')
      }else{
        dispatch(addToBookmark({
          title:state.title,
          image:state.image,
          id:state.id
        }))
      }

  }

 
    return (
      
    <div className='recipe-information-details'>
            <div className='left-section'>
              
               <div className='img-title'>
                  <h6>{recipeDetails.title}</h6>
                </div>
                
           
                <div className='recipeinformation-img'>
                        <img src={recipeDetails.image} alt='this is the information image'/>

                </div>
                
                <div className='recipe-actions'>
                   <Link to="/"> <NavigateBeforeOutlinedIcon style={iconStyle} /> </Link> 
                      <FavoriteOutlinedIcon style={iconStyle} onClick={()=>checkExist(state.id)}/>
                </div>

            </div>
            <div className='right-section'>
                  <div className='information-option'>
                      <button>Instructions</button>
                      <button>Ingredients</button>
                  </div>

                  <div className='recipeinformation-description'>
                    {recipeDetails.extendedIngredients !== undefined ? recipeDetails.extendedIngredients.map((ingredient,idx)=>{
                          return <Ingredients key={idx} data={ingredient} />                      
                    }): ""}
                  </div>

            </div>
    </div>
  )
}

export default Information