import { createSlice } from "@reduxjs/toolkit";

const slice= createSlice({
    name:"slice",
    initialState:{
        items:["jj"]
    },
    reducers:{
        addValue:(state, action)=>{
            state.items.push(action.payload);
        }
    }
})

export const {addValue}= slice.actions;

export default slice.reducer;