import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import forgotPassReducer from "./forgotPasswordSlice"
import mockReducer from "./mockSlice"
import cartReducer from "./cartSlice"
import courseSlice from "./courseSlice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword: forgotPassReducer,
        mock: mockReducer,
        cart: cartReducer,
        course:courseSlice
    }
})