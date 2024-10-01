import { configureStore } from '@reduxjs/toolkit';
// 
import counterReducer from "./features/counterSlice"

const store = configureStore({
  // reducer 的名稱會成為之後從 store 取用資料時選取的類別名稱
  // ex:state.counter
  reducer: { counter: counterReducer },
});

export default store

// 定義 store 的 TypeScript 類型
export type RootState = ReturnType<typeof store.getState>;