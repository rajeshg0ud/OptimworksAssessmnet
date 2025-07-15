import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("item");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("item", serializedState);
    } catch (err) {
        console.error("Error saving state to local storage:", err);
    }
}


const initialState = {
    cartItems: []
};

const persistedState = loadState();
if (persistedState && persistedState.cartItems && Array.isArray(persistedState.cartItems)) {
    initialState.cartItems = persistedState.cartItems;
} else {
    saveState(initialState);
}

const CartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const newState = {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
            saveState(newState);
            return newState;
        },
        removeFromCart: (state, action) => {
            const {id}= action.payload;

            const updatedItems= state.cartItems.map((cartItem)=>{

                    if( cartItem.quantity===1 && cartItem.id=== id){
                        return null;
                    }
                    else if(cartItem.quantity>1  && cartItem.id=== id){                  
                        return {...cartItem, quantity: cartItem.quantity-1}
                   }
                   else{
                    return cartItem;
                   }
            })

            const filteredItems= updatedItems.filter((item)=> item !== null);
        
            const newState={
                ...state, 
                cartItems:filteredItems}
          
            saveState(newState);
            return newState;
        }
        ,
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
          
            const newState = {
              ...state,
              cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.id === id) {
                  // If the cartItem has the same id as the action payload,
                  // increase its quantity by 1
                  return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                  };
                } else {
                  // If the cartItem doesn't match the action payload id,
                  // return it unchanged
                  return cartItem;
                }
              })
            };
          
            saveState(newState);
            return newState;
          }
          ,
          clearCart:(state)=>{
            const newState={
                ...state,
                cartItems: []
            }
            saveState(newState);
            return newState;
          }
          
    }
});

export const { addToCart, removeFromCart, increaseQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
