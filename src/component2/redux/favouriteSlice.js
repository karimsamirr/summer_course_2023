
import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState ={
  todos:[],
}
export const todoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      const todo={
        id:nanoid(),

        text:action.payload};
      state.todos.todo.push(todo)
    },
    removetodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>
      todo.id !==action.payload)
    }
  }

})

export const {addTodo,removetodo}=todoSlice.actions
export default todoSlice.reducer


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