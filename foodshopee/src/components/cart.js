import { useSelector } from 'react-redux';
import { CDN_URL } from "../config";
import { useEffect, useState } from 'react';

function Cart() {

const cartItems= useSelector(store=> store.cart.items);
const [totalPrice, setTotalPrice] = useState(0);

// Assuming cartItems is an object with items and each item has a 'price' property
const calculateTotalPrice = () => {
  const newTotalPrice = Object.values(cartItems).reduce((acc, item) => {
    return acc + (item.price ? item.price / 100 : 199.1);
  }, 0);

  setTotalPrice(newTotalPrice);
};

// Call the function whenever cartItems changes or as needed
useEffect(() => {
  calculateTotalPrice();
}, [cartItems]);

console.log(cartItems)

  return !cartItems ? (
    <h1 className=" m-32">
        Its Cart Page

    </h1>
  ):(
   <div className='m-32 flex flex-col max-w-2xl'>
    <div  className=" flex flex-col" >
    {
       Object.values(cartItems).map((item)=>(
        <div key={item.id} className=' p-2 m-4 flex justify-between font-semibold'>
          {item.name} {item?.imageId ?(<div className=" relative"><img className=" h-24 w-32 object-cover rounded-xl"
                src={`${CDN_URL}${item?.imageId}`}
                alt="menu-img"
              />
              </div>):('')}
        </div>
      ))
    }
   
   </div>{
   Object.values(cartItems).length>0 ?
    <h1 className=' border-t-2 border-black self-end font-bold text-lg mr-9'> Total: ₹{Math.floor(totalPrice)}</h1>:''}
   </div>
  )
}

export default Cart;
