import { createSlice } from "@reduxjs/toolkit"
import { getMenu, postMenu } from "./menuSliceApi"

const initialState = {
    menu:[],
    loading:false,
    error:null
}

const menuSlice = createSlice({
    name:"menu",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getMenu.pending,(state)=>{
            state.loading= true,
            state.error = null
        })
        .addCase(getMenu.fulfilled,(state,action)=>{
            state.loading = false,
            state.menu = action.payload
        })
        .addCase(getMenu.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message
        })

         .addCase(postMenu.pending,(state)=>{
            state.loading= true,
            state.error = null
        })
        .addCase(postMenu.fulfilled,(state,action)=>{
            state.loading = false,
            state.menu =[action.payload, ...state.menu]
        })
        .addCase(postMenu.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message
        })
    }  
})

export const menuSelector = (state) => state.menu.menu
export const menuLoading = (state) => state.menu.loading
export const menuError = (state) => state.menu.error
export const menuReducer = menuSlice.reducer
