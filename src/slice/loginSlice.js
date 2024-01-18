import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAuthenticated: false,
        user: null
    },
    reducers: {
        LoginAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
        },
        Logout: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
        }
    }
})

export const { LoginAuth, Logout } = loginSlice.actions
export default loginSlice.reducer