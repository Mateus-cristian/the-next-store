import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export default store;
