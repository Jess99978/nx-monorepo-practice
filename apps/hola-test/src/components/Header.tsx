import clsx from 'clsx';
import menu from '../assets/menu.svg';
import search from '../assets/search.svg';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';
import useCartStore from '../app/zustandStore';
import logo from '../assets/logo-hola-2023.svg';
const links = [
  { name: '產品', isSpecial: false },
  { name: '生活對策｜聯名', isSpecial: false },
  { name: '秋冬新品上市', isSpecial: true },
  { name: '限定活動', isSpecial: true },
  { name: 'dayoff magazine', isSpecial: false },
  { name: 'HOLA 與服務', isSpecial: false },
];

export default function Header() {
  const cartItemAmount = useCartStore((state) => state.cartItemAmount);
  return (
    <div className="hola-px-10 hola-flex hola-items-center hola-w-full hola-justify-between hola-box-border hola-border-b hola-border-gray-150 hola-py-4 xl:hola-py-0 hola-sticky hola-top-0 hola-bg-white hola-z-40">
      <button className="xl:hola-hidden">
        <img src={menu} alt="menu icon" />
      </button>
      {/* <h1 className="hola-text-3xl hola-font-bold">
        <span className="hola-text-primary-500">hola&ensp;</span>商品列表頁
      </h1> */}
      <img src={logo} alt="" />
      <nav className="hola-hidden xl:hola-block">
        <ul className="hola-flex hola-text-lg hola-gap-5 xl:hola-gap-5">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="hola-py-4 hola-px-4 hola-border-b-transparent hover:hola-border-b-primary-500 hola-border-b"
              >
                <a
                  href="#"
                  className={clsx(link.isSpecial && 'hola-text-primary-500')}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hola-flex hola-gap-4 hola-justify-center hola-items-center">
        <button>
          <img src={search} alt="search button" />
        </button>
        <button>
          <img src={heart} alt="add to favorite button" />
        </button>
        <button className="hola-flex hola-justify-center hola-items-center">
          <img src={cart} alt="add to cart button" />
          <span className="hola-w-5 hola-rounded-full hola-text-sm hola-text-gray-500">
            {cartItemAmount}
          </span>
        </button>
      </div>
    </div>
  );
}
