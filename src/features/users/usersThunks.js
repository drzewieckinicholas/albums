import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {faker} from '@faker-js/faker';

const pause = duration => new Promise(resolve => {
	setTimeout(() => {
		resolve();
	}, duration);
});

export const createUser = createAsyncThunk('users/create', async () => {
	const response = await axios.post('http://localhost:3005/users', {
		name: faker.name.fullName(),
	});

	return response.data;
});

export const deleteUser = createAsyncThunk('users/delete', async user => {
	await axios.delete(`http://localhost:3005/users/${user.id}`);

	return user;
});

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
	const response = await axios.get('http://localhost:3005/users');

	await pause(1500);

	return response.data;
});
