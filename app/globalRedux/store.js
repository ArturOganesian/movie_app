import { configureStore } from "@reduxjs/toolkit";
import allFilmsReducer from '@/app/globalRedux/slices/allFilmsSlice'

const store = configureStore({
  reducer: {
    allFilmsStore: allFilmsReducer
  },
});

export default store;
