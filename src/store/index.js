import { configureStore } from "@reduxjs/toolkit";
import buildPcReducer from "./reducers/buildPcSlice";

export const store = configureStore({
  reducer: {
    buildPC: buildPcReducer,
  },
});
