import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
