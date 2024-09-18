import Product from './Product';
import productData from '../mock-data/products.json';

export default function ProductList() {
  return (
    <>
    <div className='tlw-ml-5'>
    <h1 className='tlw-font-bold tlw-text-3xl'>商品列表頁</h1>
      <div className="tlw-flex tlw-gap-3">
      {productData.map((product) => {
       return ( <Product key={product.id} product={product} />);
      })}
      </div>
    </div>
    </>
  );
}
