import { Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/products-detail/:productId'>
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
