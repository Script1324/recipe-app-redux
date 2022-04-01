import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/Information.css"
import {useDispatch, useSelector} from "react-redux"
import {getRecipeDetails} from "../actions/recipes"
import Ingredients from './Ingredients'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {Link} from "react-router-dom"
import {addToBookmark,removeBookmark,addIndicator} from "../actions/bookmark"
import Instructions from './Instructions'
import { setDoc,doc, collection, deleteDoc, getDocs, getDoc } from 'firebase/firestore'
import {db} from "../firebase/FirebaseConfig"
import { toast } from 'react-toastify'

function Information() {
  const [showIngredient,setshowIngredient] = useState(true)

  const ingredientShow = () =>{
    setshowIngredient(true)
  }
  const instructionShow = () =>{
    setshowIngredient(false)
  }

  const {state} = useLocation().state;
    const api_key = "da777f54977a456c8a14fbd7665d404a"
 
    const dispatch =  useDispatch()
    const recipeDetails =  useSelector((state)=> state.recipe.recipeDetails)
    const indicator = useSelector((state) => state.bookmark.indicator)
      
    const userId = useSelector((state) => state.user.value.id)
    
    //fetch the specific recipoe to get more of its inforamation     
    useEffect(()=>{

        const getRecipeInfo = async() =>{
            const data = await fetch(`https://api.spoonacular.com/recipes/${state.id}/information?apiKey=${api_key}`)
            const json = await data.json()
            
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

    const addedStyle= {
        ...iconStyle,
          color: "rgb(233, 34, 67)"
    }

    const booklist = useSelector((state)=>state.bookmark.bookmarkList)

    
  const checkExist = async(id) =>{
    
       const data =  await getDocs(collection(db,`users/${userId}/UsersData`))
           const docData = data.docs.map((doc)=>{
                    return {...doc.data(),id:doc.id}
            })

        const exist = docData.find((doc)=>{
              return doc.id === id
          })
          
      // const exist = booklist.find((list)=> list.id == id)

      if (exist){
          // dispatch(removeBookmark(exist.id))
         dispatch(addIndicator(false))
          await deleteDoc(doc(db,`users/${userId}/UsersData/${exist.id}`))

         toast.success('succesfully removed')
      }else{
        // dispatch(addToBookmark({
        //   title:state.title,
        //   image:state.image,
        //   id:state.id
        // }))
        //   //this is for the heart indicator
        // dispatch(addIndicator(true))

        //push it in the firebase
         await setDoc(doc(db,`users/${userId}/UsersData/${state.id}`),{
                title:state.title,
                image:state.image,
                id:state.id,
                isSelected:true
         })
         toast.success("Added To bookmmark")

          const activate = await getDoc(doc(db,`users/${userId}/UsersData/${state.id}`))
            dispatch(addIndicator(activate.data().isSelected))

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
                   <Link to="/" style={{textDecoration:"none"}}> <NavigateBeforeOutlinedIcon style={iconStyle} /> </Link> 
                      <FavoriteOutlinedIcon style={indicator? addedStyle : iconStyle} onClick={()=>checkExist(state.id)}/>
                </div>

            </div>
            <div className='right-section'>
                  <div className='information-option'>
                      <button onClick={ingredientShow}>Ingredients</button>
                      <button onClick={instructionShow}> Instructions</button>

                  </div>

                  <div className='recipeinformation-description'>
                  {showIngredient ? ( recipeDetails.extendedIngredients !== undefined ? recipeDetails.extendedIngredients.map((ingredient,idx)=>{
                          return  <Ingredients key={idx} data={ingredient} />                      
                    }):"") : <Instructions key={recipeDetails.id} data={recipeDetails}/>}
                   


                  </div>

            </div>
    </div>
  )
}

export default Information