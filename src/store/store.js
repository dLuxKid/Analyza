import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice";
import userReducer from "./Reducers/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
