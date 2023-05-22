import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState = {
  name: "",
  description: "",
  price: "",
  imageUrl: "",
};

export const cartSlicer = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = cartSlicer.actions;
export default cartSlicer.reducer;
