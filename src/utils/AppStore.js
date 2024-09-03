import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import MoviesReducers from './MovieSlice'
import GPTReducer from "./GPTslice";






export const AppStore=configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducers,
        gptSearch:GPTReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
}) 