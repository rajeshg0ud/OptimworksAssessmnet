import React from 'react';
import { Data } from '../data';
import { useState } from 'react';
import { DataContext } from '../context/contextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  const navigate= useNavigate();
  const [foods, setFoods]=useState(Data);
  const {addToCart, cartItems}= useContext(DataContext);

  const filterCat=(category)=>{
    setFoods(Data.filter((item)=>{
      return item.category === category;
    }))
  }
  return (
    <div className='food-container'>
      <h1 className="h1-center">
        Order Food
      </h1>

        <div className='menu-filter'>
          <button onClick={()=>setFoods(Data)} className='menu-button'>All</button>
          <button onClick={()=>filterCat("salad")} className='menu-button'>Salad</button>
          <button onClick={()=>filterCat("pizza")} className='menu-button'>Pizza</button>
          <button onClick={()=>filterCat("chicken")} className='menu-button'>Chicken</button>
          <button onClick={()=>filterCat("fish")} className='menu-button'>Fish</button>
          <button onClick={()=>filterCat("beverage")} className='menu-button'>Beverage</button>
        </div>
      
      <div className='food-grid'>
        {foods.map((item) => (
          <div key={item.id} className='food-item'>
            <img src={item.image} alt={item.name} />
              <p className='item-name'>{item.name}</p>
              <div className="item-container">
              <p className="price-text">{"₹"}{item.price}</p>
              <div className='add-button' > 
                {cartItems[item.id]===0 && <a className='addToCartBttn' onClick={()=>addToCart(item.id)}>{"ADD TO CART"}</a>}
                {cartItems[item.id]>0 && <a className='addToCartBttn' onClick={()=> navigate("/cart")}>
                  GO TO CART</a> }     
            </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Food;

