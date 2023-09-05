// redux/favoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;


// const favoritesSlice = createSlice({
//   name: "user",
//   initialState: [],
//   reducers: {
//     addFavorite: (state, action) => {
//       const movie = action.payload;
//       if (!state.some((fav) => fav.id === movie.id)) {
//         state.push(movie);
//       }
//     },

//   },
// });

// export const { addFavorite } = favoritesSlice.actions;
// export default favoritesSlice.reducer;
