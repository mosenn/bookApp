import { configureStore } from "@reduxjs/toolkit";

import Slicedata from "../services/data";
import searchQuery from "../services/searchQuery";

export const Store = configureStore({
  reducer: {
    //  name : file
    bookData: Slicedata,
    SliceQuery: searchQuery,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
