import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import sliceReducer from "./recipes"
import bookmarkReducer from "./bookmark"

const store = configureStore({
    reducer: {
        user:userReducer,
        recipe:sliceReducer,
        bookmark:bookmarkReducer
    }
})

export default store;