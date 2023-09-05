// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../redux/favouriteSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
