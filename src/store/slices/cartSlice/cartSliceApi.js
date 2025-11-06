import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../api/instance";

export const  getCarts = createAsyncThunk(
       "carts/getCarts",
       async (_,{rejectWithValue}) => {
        try {
            const res = await instance.get("/carts")
            return res.data
        } catch (error) {
            console.error
            return rejectWithValue(error.response?.data)

        }
       }
)

export const postCarts = createAsyncThunk(
    "carts/postCarts",
    async (body,{rejectWithValue}) => {
        try {
            const res = await instance.post("/carts",body)
            return  res.data
        } catch (error) {
            console.error
            return rejectWithValue(error.response?.data)
        }
    }
)



export const putCarts = createAsyncThunk(
    "carts/putCarts",
    async (body,{rejectWithValue}) => {
        try {
            const res = await instance.put(`/carts/${body.id}`,body)
            return res.data
        } catch (error) {
            console.error
            return rejectWithValue(error.response?.data)
        }
    }
)

export const deleteCarts = createAsyncThunk(
    "carts/deleteCarts",
    async (id,{rejectWithValue}) => {
        try {
            const res = await instance.delete(`/carts/${id}`)
            return res.data
            
        } catch (error) {
            console.error
            return rejectWithValue(error.response?.data)
        }
    }
)