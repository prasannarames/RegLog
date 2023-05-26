import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.userData = action.payload;
        },
        loginUser: (state, action) => {
            state.userData = action.payload;
        },
        logoutUser: (state) => {
            state.userData = null;
        }
    }
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;