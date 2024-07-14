import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[]
}
localStorage.getItem('items')!== null &&(initialState.items=JSON.parse(localStorage.getItem('items')))
export const cart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem("items",JSON.stringify(state.items))
        }
    }
})