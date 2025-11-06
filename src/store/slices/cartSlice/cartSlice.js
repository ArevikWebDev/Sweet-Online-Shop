import { createSlice } from "@reduxjs/toolkit"
import { deleteCarts, getCarts, postCarts, putCarts } from "./cartSliceApi"

const initialState = {
    carts: [],
    loading: false,
    error: null,
    isCartOpen: false,
    quantity:1
}


const cartSlice = createSlice({
    name: "carts",
    initialState,

    reducers: {
        setCartOpen: (state, action) => {
            state.isCartOpen = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCarts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.loading = false
                state.carts = action.payload
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })


            // ============================================

            .addCase(postCarts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(postCarts.fulfilled, (state, action) => {
                state.loading = false
                state.carts.push(action.payload)
            })
            .addCase(postCarts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // ===========================

            .addCase(putCarts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(putCarts.fulfilled, (state, action) => {
                state.loading = false
                state.carts = state.carts.map(el => el.id == action.payload.id ? action.payload : el)
            })
            .addCase(putCarts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // ======================================
            .addCase(deleteCarts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteCarts.fulfilled, (state, action) => {
                state.loading = false
                state.carts = state.carts.filter(el => el.id !== action.payload.id)
            })
            .addCase(deleteCarts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})
export const { setCartOpen } = cartSlice.actions;
export const cartOpenSelector = (state) => state.carts.isCartOpen;
export const cartSelector = (state) => state.carts.carts
export const loadingCart = (state) => state.carts.loading
export const errorCart = (state) => state.carts.error
export const cartReducer = cartSlice.reducer