import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

export const store = createStore(loginReducer); // add your reducers here

