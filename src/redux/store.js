import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "../redux/contactsSlice";
import filterSliceReducer from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filterSliceReducer,
  },
});
