import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
