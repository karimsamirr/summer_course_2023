import {configureStore} from '@reduxjs/toolkit';
import dataReducer from '../redux/favouriteSlice'

const store=configureStore({
    reducer:dataReducer,
});
export default store;