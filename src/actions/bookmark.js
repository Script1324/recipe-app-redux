import {createSlice} from "@reduxjs/toolkit"

const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:{bookmarkList:[],indicator:false} ,
    reducers:{
        addToBookmark(state,action){
            state.bookmarkList = [...state.bookmarkList,action.payload]
        },
        removeBookmark(state,action){
            state.bookmarkList = state.bookmarkList.filter((list)=> list.id !== action.payload )
        },
        addIndicator(state,action){
            state.indicator = action.payload
        }
    }
})

export const {addToBookmark,removeBookmark,addIndicator} =  bookmarkSlice.actions
export default bookmarkSlice.reducer