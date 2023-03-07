
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./reducers/profile";


const persistConfig = {
  key: "root",
  storage, // identico a storage: storage
  
};

// cartReducer e userReducer gestiscono la loro porzione di stato più piccola,
// con combineReducer riportiamo le sezioni (slices) in un'unico macro oggetto globale
// prima di passarlo allo store


const persistedReducer = persistReducer(persistConfig, profileReducer);

// configureStore ha bisogno della struttura del nostro store/stato globale, come parametro principale (quindi un reducer)
export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }) // può esserci solo un valore per reducer nello store
});

export const persistor = persistStore(store);