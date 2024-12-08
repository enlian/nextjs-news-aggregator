import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const rooyReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
