import { configureStore } from "@reduxjs/toolkit";
import { aquafinaSlice } from "./aquafinaSlice";

export const store = configureStore({
    reducer:{
        aquafina:aquafinaSlice.reducer
    }
})