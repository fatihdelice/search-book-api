import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./BooksSlice";
export const store = configureStore({
    reducer: {
        BooksReducer,
    },
});