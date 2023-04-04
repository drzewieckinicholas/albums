import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

export const albumsSlice = createSlice({
	name: 'albums',
	initialState,
	reducers: {},
});

export default albumsSlice.reducer;
