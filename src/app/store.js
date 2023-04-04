import {configureStore} from '@reduxjs/toolkit';
import albumsReducer from '../features/albums/albumsSlice';
import photosReducer from '../features/photos/photosSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
	reducer: {
		albums: albumsReducer,
		photos: photosReducer,
		users: usersReducer,
	},
});
