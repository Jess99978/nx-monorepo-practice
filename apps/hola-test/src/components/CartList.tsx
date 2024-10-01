import useCartStore from '../app/zustandStore';


export default function CartList() {
    const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div className="hola-p-3">
    <h1 className="hola-mb-4 hola-text-3xl">購物車清單</h1>
    {cartItems.length === 0 ? (
      <p className='hola-text-xl hola-text-gray-600'>購物車暫無商品</p>
    ) : (
      cartItems.map((item) => {
        return (
          <li className="hola-mb-3 hola-list-none hola-flex hola-gap-5 hola-items-center hola-max-w-screen-sm hola-justify-between">
            <img
              src={`../assets/${item.image}`}
              alt=""
              className="hola-w-[100px]"
            />
            <p>{item.name}</p>
            <div className='hola-text-md'>X&emsp;{item.quantity}</div>
          </li>
        );
      })
    )}
    </div>
  )
}
