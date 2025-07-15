import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import {BsFillCartFill, BsPerson} from 'react-icons/bs';
import {TbTruckReturn} from 'react-icons/tb';
import { FaCreditCard} from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import {MdHelp, MdOutlineFavorite} from 'react-icons/md';
import { Link } from 'react-router-dom';


const TopNav = () => {
  const [sideNav, setSideNav]=useState(false);

  return (
    <div className="nav-container">
      <div className="left-section">
        <div className="menu-icon" onClick={()=>setSideNav(!sideNav)}>
          <AiOutlineMenu size={25} />
        </div>

        <Link to="/" className="link-logo">
        <h1 className="logo">
          Foodie<span  className='logo-red'>Zone</span>
          <FaHome size={25}/>
        </h1>
        </Link>
      </div>

      <div>
        <Link to="/">
        < FaHome size={25} className='link-home-logo'/></Link>
      </div>

      <div className="search-section">
        <AiOutlineSearch size={25} className="search-icon" />
        <input type='text' placeholder='Search for a dish' className="search-input" />
      </div>
      
      <Link className='link-btn' to="/cart">
      <button className='cart-btn'>
        <BsFillCartFill size={20}/>
      </button>
      </Link>

      {
        sideNav? <div className='bg-black-60'  onClick={()=>setSideNav(!sideNav)}> </div>
        : ("")
      }
      <div className={sideNav? 'custom-menu-open' : 'custom-menu-close'}>
        <AiOutlineClose className='menu-close' onClick={()=>setSideNav(!sideNav)} size={25}/>
        <h2 className="logo">
          Foodie<span className='logo-red'>Zone</span>
        </h2>
        <nav>
          <ul className='menu-ul'>
            <li className='menu-li'><BsPerson size={22} className='li-logo'/> My Account </li><li className='menu-li'><MdOutlineFavorite size={22} className='li-logo'/> My Favourite </li>
            <li className='menu-li'><TbTruckReturn size={22} className='li-logo'/> Delivery </li>
            <li className='menu-li'><FaCreditCard size={22} className='li-logo'/> Wallet </li>
            <li className='menu-li'><MdHelp size={22} className='li-logo'/> Help </li>
          </ul>
        </nav>
      </div>
      
      </div> 
        
  );
}

export default TopNav;
