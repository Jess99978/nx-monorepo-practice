import '../styles.css';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Countdown from '../components/Countdown';
export function App() {
  return (
    <>
      <Header />
      <Countdown/>
      <ProductList/>
    </>
  );
}

export default App;
