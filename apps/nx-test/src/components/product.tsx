interface productProps {
    product: {
      id: number;
      name: string;
      discountPrice: number;
      price: number;
      image: string;
    };
  }
  
  export default function Product({ product }: productProps) {
    return (
      <div className="tlw-flex tlw-justify-between tlw-gap-3 tlw-border tlw-border-gray-200 tlw-px-1 hover:tlw-cursor-pointer sm:tlw-flex-col">
        <img src={`../assets/${product.image}`} alt={product.name} />
        <div className="tlw-flex tlw-w-56 tlw-flex-col tlw-justify-center tlw-gap-4 sm:tlw-w-auto sm:tlw-gap-0 tlw-items-center  sm:tlw-items-start">
          <p className="tlw-text-md sm:tlw-text-sm">{product.name}</p>
          <div className="tlw-flex tlw-flex-col tlw-items-center tlw-gap-3 sm:tlw-flex-row sm:tlw-justify-between sm:tlw-gap-0">
            <div className="tlw-flex tlw-items-center tlw-gap-2">
              <p className="tlw-text-lg tlw-font-semibold tlw-text-primary">
                {product.discountPrice}
              </p>
              <p className="tlw-text-sm tlw-text-gray-500 tlw-line-through">
                {product.price}
              </p>
            </div>
            <button>
              <img src="../assets/cart.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  