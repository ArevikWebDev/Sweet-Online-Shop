import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../api/instance";



export const getProducts =createAsyncThunk(
    "products/getProducts",
    async (_,{rejectWithValue}) => {
        try {
            const res = await instance.get("/products")
            return res.data
        } catch (error) {
            console.error(error)
            return rejectWithValue(error.response?.data)
        }
    }
)

export const addProduct = createAsyncThunk(
    "products/add",
    async (body,{rejectWithValue}) => {
        try {
            const res = await instance.post("/products", body)
            return res.data
        } catch (error) {
            console.error(error)
            return rejectWithValue(error.response?.data)
        }
    }
)

// export const deleteProduct = createAsyncThunk(
//     "products/delete",
//     async (id,{rejectWithValue}) => {
//         try {
//             await instance.delete(`/products/${id}`)
//             return id
//         } catch (error) {
//             console.error(error)
//         }
//     }
// )