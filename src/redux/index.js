
import { profileReducer } from "./reducers/profile";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";



const persistConfig = {
  key: "root",
  storage, 
  transforms: [
    encryptTransform({
      secretKey: "SUPER_SECRET_KEY",
      onError: function (error) {
        console.log(error)
      },
    }),
  ],

};


const rootReducer = combineReducers({
  profile:profileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

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