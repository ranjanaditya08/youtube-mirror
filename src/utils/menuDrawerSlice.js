import { createSlice } from "@reduxjs/toolkit";

const menuDrawerSlice = createSlice({
  name: "menuDrawer",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = menuDrawerSlice.actions;
export default menuDrawerSlice.reducer;
