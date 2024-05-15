import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "../redux/contactsSlice";
import filterSliceReducer from "../redux/filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactPersistConfig = {
  key: "contactsItem",
  storage,
  whitelist: ["items"],
};

const persistContactsReducer = persistReducer(
  contactPersistConfig,
  contactSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filterSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
