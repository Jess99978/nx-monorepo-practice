import clsx from 'clsx';
const links = [
  { name: '產品',isSpecial: false },
  { name: '生活對策｜聯名', isSpecial: false },
  { name: '秋冬新品上市', isSpecial: true },
  { name: '限定活動', isSpecial: true },
  { name: 'dayoff magazine', isSpecial: false },
  { name: 'HOLA 與服務', isSpecial: false },
];

export default function Header() {
  return (
    <div className="hola-px-10 hola-flex hola-items-center hola-w-full hola-justify-between hola-box-border hola-border-b hola-border-gray-150 hola-py-4 xl:hola-py-0">
      <button className="xl:hola-hidden">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hola-w-4 hola-h-4"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 3.5H14V4.5H2V3.5ZM2 7.5H11V8.5H2V7.5ZM2 11.5H14V12.5H2V11.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <h1 className="hola-text-3xl hola-font-bold">
        <span className="hola-text-primary">hola&ensp;</span>商品列表頁
      </h1>
      <nav className="hola-hidden xl:hola-block">
        <ul className="hola-flex hola-text-lg hola-gap-5 xl:hola-gap-5">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="hola-py-4 hola-px-4 hover:hola-border-b-primary hover:hola-border-b"
              >
                <a
                  href="#"
                  className={clsx(link.isSpecial && 'hola-text-primary')}
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18 18L21 21"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.38061 7.07375C2.63188 6.46964 3.00018 5.92074 3.46448 5.45838C3.92877 4.99602 4.47997 4.62925 5.0866 4.37902C5.69323 4.12879 6.34341 4 7.00003 4C7.65664 4 8.30682 4.12879 8.91345 4.37902C9.52008 4.62925 10.0713 4.99602 10.5356 5.45838L12 6.91672L13.4644 5.45838C14.4021 4.5246 15.6739 4.00001 17 4.00001C18.3261 4.00001 19.5978 4.5246 20.5355 5.45838C21.4732 6.39216 22 7.65864 22 8.9792C22 10.2998 21.4732 11.5662 20.5355 12.5L12 21L3.46448 12.5C3.00018 12.0377 2.63188 11.4888 2.38061 10.8847C2.12933 10.2806 2 9.63308 2 8.9792C2 8.32533 2.12933 7.67785 2.38061 7.07375Z"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 3H3.25537C3.69726 3 4.08677 3.29004 4.21342 3.71339L7.61185 15.0734C7.86515 15.9201 8.64416 16.5002 9.52794 16.5002H17.5672C18.4425 16.5002 19.2161 15.931 19.4766 15.0954L21.5955 8.29778C21.7962 7.654 21.3152 7.00019 20.6408 7.00019H7"
              stroke="currentColor"
            ></path>
            <circle cx="8.5" cy="20.5" r="1.5" stroke="currentColor"></circle>
            <circle cx="18.5" cy="20.5" r="1.5" stroke="currentColor"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
}
