import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
             state.nowPlayingMovie=action.payload;
        }
        
    }
})
export const {addNowPlayingMovies}=MovieSlice.actions;
export default MovieSlice.reducer;