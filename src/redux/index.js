import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profile";

export const store = configureStore ({reducer: profileReducer})




