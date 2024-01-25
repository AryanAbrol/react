import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toogle: (state)=>
    {
      return state=!state;
    }
  }
});

export const privacyactions = privacySlice.actions;

export default privacySlice;