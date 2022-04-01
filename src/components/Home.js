import React,{useState} from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import RecipeCard from './RecipeCard'
import {getRandomRecipe, getRecipe} from "../actions/recipes"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "../styles/Home.css"
import Categoies from './Categoies'
import {Link} from "react-router-dom"


function Home() {
  
  const randomRecipes = useSelector((state)=>state.recipe.randomRecipe)
  const recipes = useSelector((state)=>state.recipe.recipe)
  
  
  console.log(recipes)
  const dispatch = useDispatch()

    const api_key = "da777f54977a456c8a14fbd7665d404a"
    useEffect(()=>{

        const fetchRandomRecipes = async() =>{
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=pasta&number=5`)
            const json = await data.json()
        
            dispatch(getRandomRecipe(json.results))

          } 

            fetchRandomRecipes();
    },[])

    
  return (
    <div>
          <label>January 25,2022</label>
          <h2>The most popular deserts</h2>

          <div className='recipecard-wrapper'>
            <Splide options={{
              pagination:false,
              padding:"20px",
              width:"100%",
              fixedWidth:"250px",
              gap:"20px"
              
            }}>

            {randomRecipes !== undefined ? randomRecipes.map((recipe)=>{
                return <SplideSlide key={recipe.id}><Link to="/information" state={{state:recipe.id}} style={{textDecoration:"none"}}>  <RecipeCard  data={recipe}/></Link></SplideSlide> 
            }): "llloading data"}

              </Splide>

          </div>

          <div className='recipes-categories'>
                  <Categoies/>
                  
                  <div className='categories-recipes'>
                      {recipes.length !== 0 ? recipes.map((recipe)=>{
                          return <Link to="/information" state={{state:recipe}} key={recipe.id} style={{textDecoration:"none"}}><RecipeCard  data={recipe}/>  </Link>
                      }) : <h2>Search Your Desired Recipe Here..</h2>  }
                  </div>  

          </div>
    </div>
  )
}

export default Home