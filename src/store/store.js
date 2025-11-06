import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice/menuSlice";
import { productsReducer } from "./slices/productSlice/productSlice";
import burgerReducer  from "./slices/burgerSlice/burgerSlice";
import { cartReducer } from "./slices/cartSlice/cartSlice";
import modalReducer from "./slices/modalSlice/modalSlice";
import { loginReducer }  from "./slices/loginSlice/loginSlice";

const store = configureStore({
    reducer:{
     menu:menuReducer,
     products:productsReducer,
     burger:burgerReducer,
     carts:cartReducer,
     modal:modalReducer,
     admin:loginReducer
    }
})
export default store