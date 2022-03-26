import {createSlice} from "@reduxjs/toolkit"

const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:{bookmarkList:[]} ,
    reducers:{
        addToBookmark(state,action){
            state.bookmarkList = [...state.bookmarkList,action.payload]
        },
        removeBookmark(state,action){
            state.bookmarkList = state.bookmarkList.filter((list)=> list.id !== action.payload )
        }
    }
})

export const {addToBookmark,removeBookmark} =  bookmarkSlice.actions
export default bookmarkSlice.reducer