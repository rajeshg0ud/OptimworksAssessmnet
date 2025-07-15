import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/body';
import Header from './components/header';
import Cart from './components/cart';
import './index.css';
import RestaurantMenu from './restaurantMenu';
import { Provider } from 'react-redux';
import store from './utils/reduxStore';

const AppLayout = () => {
  return(
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  )}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/',
        element: <Body />,

      },
      {
        path: '/cart',
        element: <Cart />, 
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      }],
  },]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
