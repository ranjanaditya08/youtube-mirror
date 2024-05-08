import { configureStore } from "@reduxjs/toolkit";
import menuDrawerSlice from "./menuDrawerSlice";

const store = configureStore({
  reducer: {
    menuDrawer: menuDrawerSlice,
  },
});

export default store;
