import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../api/instance";


export const getMenu = createAsyncThunk(
    "menu/getMenu",
    async (_,{rejectWithValue}) => {
        try {
            const res = await instance.get("/menu", )
            return res.data
        } catch (error) {
            console.error(error)
            return rejectWithValue(error.response?.data)
            
        }
    }
)


export const postMenu = createAsyncThunk(
    "menu/postMenu",
    async (body,{rejectWithValue}) => {
        try {
            const res = await instance.post("/menu", body)
            return res.data
        } catch (error) {
            console.error(error)
            return rejectWithValue(error.response?.data)
        }
    }
)