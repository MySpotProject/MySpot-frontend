import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    isAuth: false,
};

const setUser = createAction("SET_USER");

export default createReducer(initialState, {
    [setUser]: function (state) {
        state.currentUser(action.payload);
        state.isAuth = true;
    },
});
