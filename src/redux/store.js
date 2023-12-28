import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import formReducer from "./features/form/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
