import Product from './Product';
import productData from '../mock-data/products.json';

export default function ProductList() {
  return (
      <div className="tlw-mt-5 tlw-mx-5">
        <h1 className="tlw-text-3xl tlw-font-bold tlw-mb-5"><span className='tlw-text-3xl tlw-font-bold tlw-text-primary'>特力屋</span>&ensp;商品列表頁</h1>
        <div className="tlw-flex tlw-max-w-7xl tlw-flex-col tlw-gap-3 sm:tlw-flex-row">
          {productData.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
  );
}
