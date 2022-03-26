import React,{useEffect,useState} from 'react'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SetMealIcon from '@mui/icons-material/SetMeal';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { getRecipe } from '../actions/recipes';

import "../styles/Categories.css"

function Categoies() {

        const dispatch = useDispatch()
        const[keyWord,setKeyWord] = useState("")

    const iconStyle = {
        borderRadius:"10px",
        backgroundColor:"rgb(26, 14, 58)",
        padding:"7px",
        width:"40px",
        height:"40px",
        color:"white",
        pointerEvents:"none"
    } 
  
    const api_key = "da777f54977a456c8a14fbd7665d404a"

    useEffect(()=>{
        
        if(keyWord !== ""){
                
        const fetchRecipes = async() =>{
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${keyWord}&number=15`)  
            const json = await data.json()
              dispatch(getRecipe(json.results))
              console.log(json)
          }
          
        fetchRecipes()
        }
        
    
    },[keyWord])

    const getlabel = (e) =>{
        console.log(e.target.innerText)
        setKeyWord(e.target.innerText)
    }

    return (
    <div className='categories-header'>

            <div className='categories-icons' onClick={getlabel} >
            <LocalPizzaIcon  style={iconStyle}/>
            <label>pizza</label>
            </div>
            <div className='categories-icons' onClick={getlabel}>
            <FastfoodIcon  style={iconStyle}/>
            <label>burger</label>
            </div>
            <div className='categories-icons' onClick={getlabel}>
            <IcecreamIcon  style={iconStyle}/>
            <label>icecream</label>
            </div>
            <div className='categories-icons' onClick={getlabel}>
            <SetMealIcon  style={iconStyle}/>
            <label>fish</label>
            </div>
            <div className='categories-icons' onClick={getlabel}>
            <SearchIcon  style={iconStyle}/>
            <label>Search</label>
            </div>

    </div>
  )
}

export default Categoies