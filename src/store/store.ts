import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "./reducers/coutries/country.reducer";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});
