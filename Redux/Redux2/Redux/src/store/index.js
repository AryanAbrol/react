import {configureStore} from "@reduxjs/toolkit";
import counterslice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({reducer: {
  counter: counterslice.reducer,
  privacy: privacySlice.reducer
}});


export default counterStore;