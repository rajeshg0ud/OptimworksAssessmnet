import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import {useDispatch, useSelector} from 'react-redux';
import { input } from '../utils/searchInput';

function Header(){

    const [searchText, setSearchText]= useState("");

    const cartItems= useSelector( store=> store.cart.items);

    const dispatch=useDispatch();

    const inputChange=(e)=>{
        setSearchText(e.target.value);
    }

    const inputSubmit=(e)=>{
        e.preventDefault(); 
        dispatch(input(searchText));

    }
    const handleHome=()=>{
        dispatch(input(''));
    }
    console.log("console from header ");

    return (
        <div className="flex justify-evenly items-center h-20 w-full fixed top-0 bg-white z-10 shadow-lg">
            <div className="flex justify-center w-28">
                <Link to='/' onClick={()=>handleHome()}>
                    <img className="w-24 hover:w-28 transition-width duration-500 ease-in-out" src="https://1000logos.net/wp-content/uploads/2022/11/Shopee-Food-Logo.png" />
                </Link>
            </div>
            <div className='w-2/6 p-1 border border-gray-400 rounded-md'>
                
                   <form className='inputtf' onSubmit={inputSubmit}> 
                   <FontAwesomeIcon className='px-2' icon={faSearch} />  
                   <input className="inputt focus:outline-none" placeholder="Search for Restaurants"
                    type='text' value={searchText} onChange={inputChange}/>
                   </form>
                </div>
            <div >
                <ul className='flex'>
                    <li className='p-3 m-3 flex hover:text-orange-500 font-semibold'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"  className='px-2'/> <a>Help</a></li>
                    <li className='p-3 m-3 flex  hover:text-orange-500 font-semibold'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"   className='px-2'/><a>Sign In </a></li>
                    <li className='p-3 m-3 flex  hover:text-orange-500 font-semibold'><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg'  className='px-2' /> <Link to='/cart'>Cart {cartItems.length}</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;