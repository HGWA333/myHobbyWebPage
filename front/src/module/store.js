import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import btnReducer from "./btn";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    btn: btnReducer,
  },
});

export default store;
