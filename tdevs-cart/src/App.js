import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import ShopContextProvider from './context/context';

function App(){
  return(
    <div>
    <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;