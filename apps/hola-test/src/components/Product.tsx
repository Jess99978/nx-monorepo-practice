// interface productProps {
//     product:{
//         name:string;
//         price:number;
//         image:string;
//     }
// }
import { useState } from 'react';

export default function Product() {
  const [incart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart(true);
  };
  return (
    <div className="hola-flex-col hola-gap-4 hola-flex">
      <img src="../../assets/sofa-01.jpg" alt="sofa" />
      <h1 className="hola-text-lg hola-text-">
        FLEXLUX Torino 布質沙發右L 217cm 粉藕
      </h1>
      <div className="hola-flex-col hola-flex hola-gap-3">
        <p>$89900</p>
        <button className="hola-p-3 hola-text-gray-200 hola-bg-black hover:hola-bg-primary hover:hola-text-black" onClick={addToCart}>
          {incart? "已選購":"立即選購"}
        </button>
      </div>
    </div>
  );
}
