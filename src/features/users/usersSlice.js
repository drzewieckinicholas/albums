import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	data: [],
	error: null,
	isLoading: false,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
