// zustand 4.x 以上的版本要用 {} 引入
import { create } from 'zustand';

// 定義 store 的 type
type CartStore = {
  // cartItems 是一個物件陣列
  cartItems: { name: string; price: number; image: string; quantity: number }[];
//   addToCart 是一個函數，接收的參數 product 是一個物件
  addToCart: (product: { name: string; price: number; image: string }) => void;
  cartItemAmount: number;
};

// 用 create 自定義 hook 來儲存狀態和方法
const useCartStore = create<CartStore>()((set) => ({
  cartItemAmount: 0,
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      // 商品是否已經存在於購物車
      const isExist = state.cartItems.find(
        (item) => item.name === product.name,
      );
      // 更新 cartItems 狀態
      //   如果商品不存在，在 cartItems 中加入該商品物件，且 quantity 設定為 1
      if (!isExist) {
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }], 
          cartItemAmount: state.cartItemAmount + 1,// 將購物車總量 +1
        };
      } else {
        // 如果商品已經存在，將物件中的 quantity +1，否則使用原物件
        return {
          cartItems: state.cartItems.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
          // 將購物車總量 +1
          cartItemAmount: state.cartItemAmount + 1,
        };
      }
    }),
}));

export default useCartStore;
