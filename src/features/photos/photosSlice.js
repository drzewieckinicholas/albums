import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

export const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {},
});

export default photosSlice.reducer;
