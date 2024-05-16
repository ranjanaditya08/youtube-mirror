import { configureStore } from "@reduxjs/toolkit";
import menuDrawerSlice from "./menuDrawerSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    menuDrawer: menuDrawerSlice,
    search: searchSlice,
  },
});

export default store;
