import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = (key: string, blacklist?: string[]) => ({
  key,
  blacklist,
  storage,
});

export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig("CART_PERSIST", [""]), cartSliceReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export default store;
