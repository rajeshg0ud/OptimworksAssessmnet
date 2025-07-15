import React from 'react';import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopNav from './components/TopNav';
import ContextProvider from './context/contextProvider';
import './index.css'; 
import Home from './pages/home/Home';
import Cart from './pages/cart/cart';

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Router>
          <TopNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
      </ContextProvider>
    </div>
  )
}

export default App
