import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    toolkit: userReducer,
});

export const userStore = configureStore({
    reducer: rootReducer,
});
