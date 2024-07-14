import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    numberOfItems:20
}
export const aquafinaSlice = createSlice({
    name:"aquafina",
    initialState,
    reducers:{
        order:(state)=>{
            state.counter--
        },
        reStock:(state)=>{
            state.counter++
        }
    }
})
