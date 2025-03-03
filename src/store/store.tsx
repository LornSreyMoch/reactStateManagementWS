import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import useReducer from "./useReducer";

export const store = configureStore({
    reducer:{
        shoppingReducer: shoppingReducer,
        user: useReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDaspatch = typeof store.dispatch;