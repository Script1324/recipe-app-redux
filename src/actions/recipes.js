import { configureStore ,createSlice} from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
    name:"recipe",
    initialState:{randomRecipe:[],recipe:[],recipeDetails:{} },
    reducers:{
        getRandomRecipe(state,action){
            state.randomRecipe = action.payload
        },
        getRecipe(state,action){
            state.recipe = action.payload
        },
        getRecipeDetails(state,action){
            state.recipeDetails = action.payload
        }
        
        

    }
})

export const {getRandomRecipe,getRecipe,getRecipeDetails} = RecipeSlice.actions
export default RecipeSlice.reducer