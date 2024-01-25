import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
  name: 'counter',
  initialState: {counterval: 0},
  reducers:{
    increment: (state)=>
    {
      state.counterval++;
    },
    decrement: (state)=>
    {
      state.counterval--;
    },
    add: (state,action)=>
    {
      state.counterval += Number(action.payload);
    },
    subtract: (state,action)=>
    {
      state.counterval -= Number(action.payload.num);
    },
  }
});

export const counteractions = counterslice.actions;

export default counterslice;