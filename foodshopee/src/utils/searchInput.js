import { createSlice } from "@reduxjs/toolkit";

const searchInput= createSlice({
    name:"search",
    initialState:{
        searchInput:["jh"]
    },
    reducers:{
        input: (state, action)=>{
            state.searchInput=[action.payload];
        }
    }
})

export const {input}= searchInput.actions; 

export default searchInput.reducer;