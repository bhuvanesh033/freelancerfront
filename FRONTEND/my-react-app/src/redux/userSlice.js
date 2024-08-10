// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token') || null,
    },
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        clearUser: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
