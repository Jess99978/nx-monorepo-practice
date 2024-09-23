import { Component } from 'react';
import clsx from 'clsx';

// 定義傳入狀態的型別
interface ProductState {
  inCart: boolean;
  stock: number;
  disabled:boolean
}
// 定義傳入值的型別（若沒有接收 props 就定義為空）
interface ProductProps {
  name: string;
  price: number;
  image: string;
}

// Component 接收兩個參數：組件的 props 類型以及 state 類型
class ProductClass extends Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    // 使用 super 繼承 component，確保可以使用 this
    super(props);

    // 初始化 state
    this.state = {
      inCart: false,
      stock: 8,
      disabled:false
    };
  }
  //   addToCart = () => {
  //     this.setState({ inCart: true });
  //   };

  // 減少庫存的方法(點擊按鈕觸發)
  reduceStock = () => {
    this.setState((prevState) => ({
      stock: prevState.stock - 1,
    }));
  };

  // ComponentDidUpdate 接收兩個參數（先前參數、先前狀態）:在狀態更新時觸發
  componentDidUpdate(
    prevProps: Readonly<ProductProps>,
    prevState: Readonly<ProductState>,
    snapshot?: any,
  ): void {
    // 自動更新庫存數量
    // if (prevState.stock !== this.state.stock && this.state.stock < 5) {
    // //   this.setState({ stock: 20 });
    // }
    if (prevState.stock !== this.state.stock && this.state.stock === 0) {
      this.setState({disabled:true});
    }
  }

  //   一定要使用 render 方法來渲染
  render() {
    //  解構出 inCart 和 stock 狀態
    const { stock,disabled } = this.state;
    return (
      <div className="hola-flex-col hola-gap-4 hola-flex">
        <img src={`../../assets/${this.props.image}`} alt="sofa" />
        <h1 className="hola-text-lg hola-text-">{this.props.name}</h1>
        <div className="hola-flex-col hola-flex hola-gap-3">
          <div className="hola-flex hola-justify-between">
            <p>{this.props.price}</p>
            <p>庫存:{stock}</p>
          </div>
          <button
            className={clsx(disabled?'hola-p-3 hola-text-gray-700 hola-bg-gray-200':
              'hola-p-3 hola-text-gray-200 hola-bg-black hover:hola-bg-primary hover:hola-text-black'
            )}
            onClick={this.reduceStock}
            disabled={disabled}
          >
            立即選購
          </button>
        </div>
      </div>
    );
  }
}

export default ProductClass;
