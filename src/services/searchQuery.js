import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  Searchquery: "",
};

const SliceQuery = createSlice({
  name: "searchQuery",
  initialState: {
    value: initialstate,
  },

  reducers: {
    SearchFun: (state, action) => {
      state.value.Searchquery = action.payload;
    },
  },
});

export default SliceQuery.reducer;

export const { SearchFun } = SliceQuery.actions;
