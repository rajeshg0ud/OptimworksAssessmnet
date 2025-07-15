import {Data} from '../../data';
import {DataContext} from '../../context/contextProvider';
import CartItem from './cartItem';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';


const Cart=()=>{
    const {cartItems, getTotalCartAmount}= useContext(DataContext);
    const totalAmount=getTotalCartAmount();
    const navigate= useNavigate();

    return(
        <div className='cart'>
            <div className="cartTitle">
                <h1> Your Cart items</h1>
            </div>
            <div className="cartItems">
                {Data.map((item)=>{
                    if(cartItems[item.id] !==0){ 
                        return <CartItem key={item.id} data={item} />;
                    }
                    })}
            </div>
            {totalAmount>0?
            <div className="checkout">
                <p >Subtotal: <span className='totalAmount'>₹{totalAmount}</span></p>
                <button onClick={()=> navigate("/")}>Go back to Home</button>
                <button>Checkout</button>
            </div>
            : <h1 className='cartEmpty'> Your Cart is Empty</h1>}

        </div>
    );
}

export default Cart;