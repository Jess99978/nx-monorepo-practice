import React, { Component } from 'react';
import { increment, decrement, reset } from '../app/features/counterSlice';
import { connect } from 'react-redux';
// 引入 TypeScript 中表示整體狀態 store 的型別
import { RootState } from '../app/store';

// 定義 props 型別
// (props 來自 mapStateToProps 和 mapDispatchToProps)
interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
interface CounterState {}

export class Counter extends Component<CounterProps, CounterState> {
  render() {
    const { increment, decrement, reset, count } = this.props;
    return (
        <div className='hola-flex hola-flex-col hola-justify-center hola-py-5 hola-gap-3 hola-items-center'>
            <h1 className='hola-text-3xl hola-font-bold'>redux 練習</h1>
      <div className='hola-flex hola-items-center hola-justify-center hola-gap-3 hola-mt-2 '>
        <button className='hola-p-3 hola-bg-primary-600 hola-rounded-md hola-text-white' onClick={decrement}>-</button>
        <h1 className='hola-text-3xl'>{count}</h1>
        <button className='hola-p-3  hola-bg-primary-600 hola-rounded-md hola-text-white' onClick={increment}>+</button>
      </div>
      <button className='hola-px-4 hola-py-2 hola-bg-cyan-600 hola-rounded-md hola-text-white hola-w-1/6' onClick={reset}>Reset</button>
      </div>
    );
  }
}
// mapStateToProps 接收 state 做為參數，並返回一個物件。
// 物件的每個屬性會被轉換為組件的 props
// ex:store 的 counter.value 被轉換成 props.count 傳入組件
const mapStateToProps = (state: RootState) => ({ count: state.counter.value });

// 從 store 中取出 action creators ，轉換成 props
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

// connect 是用來將特定的 Class Component 連接到 Redux store，讓該組件可以訪問和操作 Redux 中的資料。
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
