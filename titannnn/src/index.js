import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Product from './utills/Product';
import { Store } from './reduxStore/Store';
import {Provider} from 'react-redux';
import Cart from './Components/Cart';

  function AppLayout(){
    return(
      <div className="bg-white">
      <Provider store={Store} >
      <Header />
      <Outlet />
      </Provider>
    </div>
    )
  }

  const appRouter=createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
    {
      path: '/',
      element: <Home />
    },
    {
    path:'/product',
    element:<Product />
  },
  {
    path:'/Cart',
    element: <Cart />
  }
]
  }])

 
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

