import { createSlice } from "@reduxjs/toolkit";

const initialState = {email:""}

const userSlice = createSlice({
    name:"users",
    initialState:{ value:initialState,isLoggedIn:false,display:true },
    reducers:{
        login(state,action){

            state.value = action.payload.usersData
            state.isLoggedIn = action.payload.loggedStatus
      
        }, 
        toggleSign(state,action){
            state.display = !state.display
        }

    }
})

export const {login,logout,toggleSign} = userSlice.actions
export default userSlice.reducer