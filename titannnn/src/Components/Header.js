import React, { useState } from 'react';
import logo from '../titan-logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems= useSelector(Store=> Store?.CartSlice?.cartItems);
  
  const [isFocused, setIsFocused] = useState(false);
  let numOfItem = 0;

  if (cartItems && cartItems.length > 0) {
    cartItems.forEach(cartItem => {
      numOfItem += cartItem.quantity;
    });
  }
  
  return (
    <div className=' fixed top-0 w-full z-50'>
      <header className=' flex justify-between p-3 bg-white shadow-lg'>
        <Link to='/' className='p-3'><img src={logo} className=' w-[124px] ml-7 cursor-pointer' alt="logo" /></Link>
        <div className={` border rounded-sm w-2/6 px-2 my-[5.5px] flex ${isFocused ? "bg-white" : "bg-gray-100"}`}>
          <img src='https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dwc65631a9/images/search.svg' alt='search' className='p-2' />
          <input type='text' placeholder='Search for Products...' className={` outline-none w-full ${isFocused ? "bg-white" : "bg-gray-100"}`} onClick={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
        </div>
        <div className=' flex mr-10'>
          <p className=' px-4 flex flex-col items-center hover:cursor-pointer'><img src='https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw1d6980ca/images/headerAccount.svg' />Login</p>
          <Link to='/Cart' className='relative'>
            <p className=' px-4 flex flex-col items-center hover:cursor-pointer'>
              <img src='https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw7cbff1cd/images/headerCart.svg' alt="cart" />
              Cart{numOfItem > 0 && (
                <span className="absolute top-0 left-8 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {numOfItem}
                </span>
              )}
            </p>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
