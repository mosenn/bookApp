import { createSlice } from "@reduxjs/toolkit";
import { response } from "./api";

const initialstate = {
  data: response.data,
};

const Slicedata = createSlice({
  name: "bookData",
  initialState: {
    value: initialstate,
  },
});

export default Slicedata.reducer;
