import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, increaseQuantity, removeFromCart } from '../reduxStore/CartSlice';
import StripeCheckout from 'react-stripe-checkout';


function Cart() {

    const cartItems= useSelector(Store=> Store?.CartSlice?.cartItems);
    const [isOrderPlaced, setIsOrderPlaced]=useState(false);

    const dispatch=useDispatch();
    let numOfItem= 0;
    let totalPrice=0;
    let discountedPrice=0;
  //const {id, attributes, dimensions}= cartItems[0];
  //const {name, listPrice, price, imageUrl}= attributes;

  cartItems.map((cartItem)=>{
    numOfItem+= cartItem.quantity;
    totalPrice+=cartItem.attributes.listPrice.value*cartItem.quantity;
    discountedPrice+=cartItem.attributes.price.value*cartItem.quantity;
  })

  const handleToken = (token) => {
    console.log("payment successful",token); // You can process the token here
    placeOrder();
  };

  const placeOrder=()=>{
    dispatch(clearCart());
    setIsOrderPlaced(true);
  }

  useEffect(()=>{
    
    return ()=> setIsOrderPlaced(false);
  },[])

  if(isOrderPlaced) return(<div className='self-center flex justify-center m-[6px] mt-24 text-3xl font-semibold'>Order Placed</div>)


  if(cartItems[0]==null) return  (<div className='self-center flex flex-col items-center mt-32'>
  <img className=' w-40' src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw83105fb4/images/cart/emptybag.png' />
  <p className='m-[6px] text-3xl mt-4'>YOUR BAG IS EMPTY</p>
  <p className='text-zinc-800 py-[2px] pt-4'>There is nothing in your bag.</p>
  <p className='text-zinc-800 py-[2px]'>Let's add something new to your collection</p>        
  </div>)

  return(
    <div className=' flex flex-col ml-16 mt-24'>
 
     <p className='m-[6px] text-3xl'>CART</p> 

     <div className='flex '>
     <a className=' w-full'>
     {
         cartItems?.map((cartItem, index)=>(
             <div className='flex p-4 m-[6px] border' key={index}>
         <div>
             <img src={cartItem.attributes.imageUrl.value} className=' w-44 mr-5' />
         </div>
         <div className=' text-md w-[580px]'>
             <p className=' text-zinc-800'>{cartItem.attributes.name.value}</p>
             {
             cartItem.attributes.price.value === cartItem.attributes.listPrice.value ? 
             <p  className='font-semibold text-lg'>{" ₹ "+cartItem.attributes.listPrice.value}</p> :
             ( 
             <p className='font-semibold  text-lg'>{" ₹" + cartItem.attributes.price.value + "  "} 
             <span className="text-gray-500 line-through  text-sm"> {" ₹" + cartItem.attributes.listPrice.value}</span>
             <span className=' text-red-600 text-sm'>{" "+ Math.ceil((cartItem.attributes.listPrice.value - cartItem.attributes.price.value) / cartItem.attributes.listPrice.value * 100)}% Off</span></p>)
             }
             <p className='py-2 text-xs font-semibold text-zinc-800'> 7 Days Returnable</p>
             <div className=' pt-3 font-semibold'>
             <button className='border px-2' onClick={()=> dispatch(removeFromCart(cartItem))}>-</button>
             <button className='border px-2'>{cartItem.quantity}</button>
             <button className='border px-2' onClick={()=> dispatch(increaseQuantity(cartItem))}>+</button>
             </div>
         </div> 
         
     </div>
         ))}
     </a>
     
     <div className=' w-3/5 mx-4 my-[6px] mr-12 text-sm  font-semibold'> 
     <div className='border p-4'>
        
        <div className=' flex justify-between mt-3'>
         <p className='text-lg'>Order Summary</p> <p className=' font-normal font-xs'>({numOfItem+" "}Items)</p>
         </div>
         <p  className=' text-green-600 text-sm mb-3'>Overall Savings ₹ {totalPrice-discountedPrice}</p>
         <hr/>
         <div className=' flex justify-between my-3 font-normal'>
         <p>Order Value</p> <p> ₹ {totalPrice}</p>
         </div>
         <div className=' flex justify-between my-3 font-normal'>
         <p>Shipping</p> <p className=' text-green-600'>FREE</p>
         </div>
         <div className=' flex justify-between my-3 font-normal mb-16'>
         <p>Product Discount</p> <p>- ₹ {totalPrice-discountedPrice}</p>
         </div>
         <hr/>
         <div className=' flex justify-between my-3'>
         <p className=' text-lg'>Grand Total</p> <p> ₹ {discountedPrice}</p>
         </div>
         <StripeCheckout stripeKey='pk_test_51Oz07gSJmBCN1pgdEudRziJOzsPZkscd01sH4hUNfay0Y0jA3vds2m5b0mfCu7hKeussll2d11ZDjkm4e79t04ZR00RfMACA9Q'
          amount={discountedPrice*100} name="Titan Clone Store" currency='INR' token={handleToken}>
         <button className=' bg-yellow-500 border w-full py-4 hover:brightness-95' >PLACE ORDER</button>
         </StripeCheckout>
      </div>
     </div>
     </div>
     </div>
  )
}

export default Cart