import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import forgotPassReducer from "./forgotPasswordSlice"
import mockReducer from "./mockSlice"
import cartReducer from "./cartSlice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword: forgotPassReducer,
        mock: mockReducer,
        cart: cartReducer
    }
})