import { useState, createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};

    for(let i=1; i<PRODUCTS.length+1 ;i++){
        cart[i]=0;
    }
    return cart;
};


const ShopContextProvider=(props)=>{
    const [cartItems, setCartItems]=useState(getDefaultCart);

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(let i=1;i<PRODUCTS.length+1;i++){
            if(cartItems[i]!==0){
                let itemInfo= PRODUCTS.find((Produc)=>Produc.id === Number(i));
                totalAmount += cartItems[i]* itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId]+1}));
        
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId]-1}));
    }

    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:newAmount}));
    }

    const contextValue= {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;