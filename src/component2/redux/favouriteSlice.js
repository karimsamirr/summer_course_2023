
import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState ={
  data:[],
}
export const dataSlice=createSlice({
  name:'data',
  initialState,
  reducers:{
    addfav:(state,action)=>{
      const movie=action.payload;
      if (!state.filter((fav) => fav.id === movie.id)){
      
      state.data.push(movie)
      }
    },
    removefav:(state,action)=>{
      state.data=state.data.filter((data)=>
      data.id !==action.payload)
    }
  }

})

export const {addfav,removefav}=dataSlice.actions
export default dataSlice.reducer


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