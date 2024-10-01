// 配置 reducer
import { createSlice } from '@reduxjs/toolkit';
// createSlice 建立時，自動生成一個 reducer
export const counterSlice = createSlice({
  name: 'counter',
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  initialState: {
    value: 0,
  },
});

// 匯出 action creater
export const {increment,decrement,reset} = counterSlice.actions
// 匯出 reducer 
export default counterSlice.reducer