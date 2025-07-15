import './cart.css';
import React, { useContext } from 'react';
import {DataContext} from '../../context/contextProvider';


const CartItem=(props)=>{
    const {cartItems, addToCart, removeFromCart, updateCartItemCount}= useContext(DataContext);
    const {id, name, price, image}= props.data;

    return(
    <div className='cartItem'>
        <img src={image} />
        <div className='description'>
            <p><b>{name}</b></p>
            <p> ₹{price}</p>
            <div className='handleCount'>
                <button onClick={()=>{removeFromCart(id)}}>-</button>
                <input value={cartItems[id]}  onChange={(e)=>{updateCartItemCount(Number(e.target.value),id)}}/>
                <button onClick={()=>{addToCart(id)}}>+</button>
            </div>
        </div>
</div>)
}

export default CartItem;