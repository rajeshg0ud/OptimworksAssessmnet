import React from 'react'
import { useState, createContext } from "react";
import {Data} from '../data';

export const DataContext= createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for(let i=0; i<=Data.length;i++)
  {
    cart[i]=0;
  }


  return cart;
}

const ContextProvider = (props) => {
  const [cartItems, setCartItems]=useState(getDefaultCart);

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(let i=1;i<=Data.length;i++){
            if(cartItems[i]!==0){
                let itemInfo= Data.find((item)=>item.id===Number(i));
                
                totalAmount+= cartItems[i]* itemInfo.price;
            }
            console.log(Data.length);
        }
        return totalAmount;
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId] +1}));
        
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId]-1}));
    }

    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}));
    }

    const contextValue= {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};
    return(
        <DataContext.Provider value={contextValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider;
