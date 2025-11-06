import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    isOpen:false
}

const burgerSlice = createSlice({
    name:"burger",
    initialState,
    reducers:{
        toggleMenu:(state) =>{
            state.isOpen = !state.isOpen
        },
        closeMenu:(state)=>{
            state.isOpen = false
        }
    }
})

export const {toggleMenu,closeMenu} = burgerSlice.actions
export default burgerSlice.reducer
export const burgerSelector = (state) => state.burger.isOpen
