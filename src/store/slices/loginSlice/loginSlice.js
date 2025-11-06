import { createSlice } from "@reduxjs/toolkit"
import { getLogin } from "./loginSliceApi"

const initialState = {
    admin: {
        login: "",
        password: "",
    },
    error: null,
    loading: false,
    isAuth: "false"

}

const loginSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLogin.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(getLogin.fulfilled, (state, action) => {
                state.loading = false
                state.admin = action.payload
            })
            .addCase(getLogin.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export  const adminSelector =(state) => state.admin.admin
export const loadingSelector = (state) => state.admin.loading
export const errorSelector = (state) => state.admin.error

export const isAuthSelector = (state) => state.admin.isAuth

export const {setIsAuth} = loginSlice.actions

export const loginReducer = loginSlice.reducer