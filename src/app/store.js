import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/reducers/user/userSlice";
export const store = configureStore({
    reducer: {
        user: userReducer
    }
});
