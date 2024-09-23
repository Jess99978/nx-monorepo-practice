import Product from '../components/Product';
import ProductClass from './ProductClass';
import data from '../mock-data/products.json';

export default function ProductList() {
  return (
    <>
      <h1 className="hola-m-3 hola-text-3xl">functional component</h1>
      <div className="hola-max-w-7xl hola-px-5 hola-grid hola-grid-cols-2 hola-grid-rows-2 lg:hola-grid-cols-4 lg:hola-grid-rows-1 hola-gap-7">
        {data.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
      <h1 className="hola-m-3 hola-text-3xl">class component</h1>
      <div className="hola-max-w-7xl hola-px-5 hola-grid hola-grid-cols-2 hola-grid-rows-2 lg:hola-grid-cols-4 lg:hola-grid-rows-1 hola-gap-7 hola-mb-5">
        {data.map((product, index) => {
          return (
            <ProductClass
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
}