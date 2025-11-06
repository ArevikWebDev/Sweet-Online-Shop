import instance from "@/api/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getLogin = createAsyncThunk(
    "login/getLogin",
    async (_,{rejectWithValue}) => {
        try {
           const res = await instance.get("/admin")
           return res.data
        } catch (error) {
            console.error()
            return rejectWithValue(error?.response.data)
        }
    }
)