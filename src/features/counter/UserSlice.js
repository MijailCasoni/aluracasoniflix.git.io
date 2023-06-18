import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
    value: 0,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;
