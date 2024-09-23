import { Component } from 'react';

// 定義傳入狀態的型別 
interface ProductState {
  inCart: boolean;
}
// 定義傳入值的型別（若沒有接收 props 就定義為空）
interface ProductProps {}

// Component 接收兩個參數：組件的 props 類型以及 state 類型
class ProductClass extends Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    // 使用 super 繼承 component，確保可以使用 this
    super(props);

    // 初始化 state
    this.state = {
      inCart: false,
    };
  }
  addToCart = () => {
    this.setState({ inCart: true });
  };
//   一定要使用 render 方法來渲染
  render() {
    //  解構出 inCart 狀態
    const { inCart } = this.state;

    return (
      <div className="hola-flex-col hola-gap-4 hola-flex">
        <img src="../../assets/sofa-01.jpg" alt="sofa" />
        <h1 className="hola-text-lg hola-text-">
          FLEXLUX Torino 布質沙發右L 217cm 粉藕
        </h1>
        <div className="hola-flex-col hola-flex hola-gap-3">
          <p>$89900</p>
          <button
            className="hola-p-3 hola-text-gray-200 hola-bg-black hover:hola-bg-primary hover:hola-text-black"
            onClick={this.addToCart}
          >
            {inCart ? '已選購' : '立即選購'}
          </button>
        </div>
      </div>
    );
  }
}

export default ProductClass;
