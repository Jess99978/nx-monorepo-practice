import { useState } from 'react';
import useCartStore from '../app/zustandStore';

interface productProps {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export default function Product({product}:productProps) {
  // const [incart, setInCart] = useState(false);
  // const addToCart = useCartStore((state) => state.addToCart);
  const addToCart = useCartStore((state) => state.addToCart)
  // const addToCart = () => {
  //   setInCart(true);
  // };
  return (
    <div className="hola-flex-col hola-gap-4 hola-flex">
      <img src={`../../assets/${product.image}`} alt="sofa" />
      <h1 className="hola-text-lg hola-text-">
        {product.name}
      </h1>
      <div className="hola-flex-col hola-flex hola-gap-3">
        <p>${product.price}</p>
        <button
          className="hola-p-3 hola-text-gray-200 hola-bg-black hover:hola-bg-primary-500 hover:hola-text-black"
          onClick={()=>addToCart(product)}
        >
          加入購物車
        </button>
      </div>
    </div>
  );
}
