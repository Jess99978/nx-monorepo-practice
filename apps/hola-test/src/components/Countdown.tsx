import { Component } from 'react';
import clsx from 'clsx';
interface CountdownState {
  timeLeft: number;
  salesEnded: boolean;
}
interface CountdownProps {}
class Countdown extends Component<CountdownProps, CountdownState> {
  // 定義 timer 的類型（setInterval 回返回一個 ID 值）
  timer: number | null = null;
  constructor(props: CountdownProps) {
    super(props);
    this.state = {
      timeLeft: 10,
      salesEnded: false,
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState((prevState) => ({
        timeLeft: prevState.timeLeft - 1, // 每秒減少倒數時間
      }));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<CountdownProps>,
    prevState: Readonly<CountdownState>,
    snapshot?: any,
  ): void {
    if (
      prevState.timeLeft !== this.state.timeLeft &&
      this.state.timeLeft === 0
    ) {
      this.setState({ salesEnded: true });
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    const { timeLeft, salesEnded } = this.state;
    return (
      <div
        className={clsx(
          'hola-fixed hola-top-[61px] hola-w-full hola-flex hola-px-10 hola-py-4 hola-items-center hola-justify-between',
          {
            'hola-bg-primary-100': !salesEnded,
            'hola-bg-gray-100': salesEnded,
          },
        )}
      >
        <div className="hola-flex hola-gap-5 hola-items-center">
          <h1
            className={clsx(
              salesEnded
                ? 'hola-text-3xl hola-text-black hola-font-bold'
                : 'hola-text-3xl hola-text-red-700 hola-font-bold',
            )}
          >
            {salesEnded ? '特賣結束' : '限時特賣'}
          </h1>
          <p className="hola-text-lg hola-font-bold">剩餘時間：{timeLeft} 秒</p>
        </div>
        <button
          className={clsx(
            salesEnded
              ? 'hola-p-3 hola-text-gray-200 hola-bg-gray-600 hola-text-bold'
              : 'hola-px-3 hola-py-2 hola-bg-primary-400 hola-text-md hover:hola-bg-black hover:hola-text-white',
          )}
          disabled={salesEnded}
        >
          {' '}
          {salesEnded ? '特賣結束' : '立即選購'}
        </button>
      </div>
    );
  }
}

export default Countdown;
