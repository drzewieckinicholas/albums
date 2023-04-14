import {createSlice} from '@reduxjs/toolkit';
import {createUser, deleteUser, fetchUsers} from './usersThunks';

const initialState = {
	data: [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers(builder) {
		// For createUser
		builder.addCase(createUser.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data.push(action.payload);
		});
		builder.addCase(createUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
		// For deleteUser
		builder.addCase(deleteUser.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(deleteUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = state.data.filter(user => user.id !== action.payload.id);
		});
		builder.addCase(deleteUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
		// For fetchUsers
		builder.addCase(fetchUsers.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export default usersSlice.reducer;
