import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
  type: "", 
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.type = action.payload || "pickup"
      console.log(action.payload,555);
      
    },
    closeModal: (state) => {
      state.isOpen = false
    },
    setModalType: (state, action) => {
      state.type = action.payload
    },
  },
})

export const { openModal, closeModal, setModalType } = modalSlice.actions
export default modalSlice.reducer
export const modalSelector = (state) => state.modal
