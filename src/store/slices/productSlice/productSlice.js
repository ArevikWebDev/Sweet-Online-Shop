import { createSlice } from "@reduxjs/toolkit"
import { addProduct, getProducts } from "./productSliceApi"

const initialState = {
    products: [],
    loading: false,
    error: null
}


const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false,
                    state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })

            // =======================================

            .addCase(addProduct.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false,
                state.products = [action.payload, ...state.products]
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error.message
            })

    }
})


export const productsSelector = (state) => state.products.products
export const productsLoading = (state) => state.products.loading
export const productsError = (state) => state.products.error
export const productsReducer = productSlice.reducer