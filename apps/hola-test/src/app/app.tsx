import '../styles.css';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Countdown from '../components/Countdown';
import Counter from '../components/Counter';
import CartList from '../components/CartList';
export function App() {
  return (
    <>
      <Header />
      {/* <Countdown/> */}
      {/* <Counter/> */}
      <div className='hola-flex hola-gap-2'>
      <ProductList/>
      <CartList/>
      </div>
    </>
  );
}

export default App;
