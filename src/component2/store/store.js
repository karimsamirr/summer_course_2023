import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../redux/favouriteSlice'

const store=configureStore({
    reducer:todoReducer,
});
export default store;