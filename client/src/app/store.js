import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import forgotPassReducer from "./forgotPasswordSlice"
import mockReducer from "./mockSlice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword: forgotPassReducer,
        mock: mockReducer
    }
})