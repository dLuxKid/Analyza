import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screensize: null,
  openSidebar: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setScreenSize: (state, { payload }) => {
      state.screensize = payload;
    },
    setOpenSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const { setScreenSize, setOpenSidebar } = userSlice.actions;
export default userSlice.reducer;
