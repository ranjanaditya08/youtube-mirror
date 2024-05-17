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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = menuDrawerSlice.actions;
export default menuDrawerSlice.reducer;
