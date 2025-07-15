import React from 'react';
import { topPicks } from '../dtaa2';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import scooter from '../Images/scooter.png';

const TopPicks = () => {
  return (
    <div className="toppicks-container">
        <h1 className='toppicks-main-title'>What's on your mind?</h1>
        <div className='toppicks-item-container'>
        <div className="free-delivery">
          <p className="free-logo">Free</p>
           <p >Delivery</p>
           <img  src={scooter} alt="sc"/>
        </div>
            <Splide options={{perPage:3, gap:"0.7rem", grag:"free", arrows:false, autoplay: true, interval: 2800, rewind: true }}>
                
            {
                topPicks.map((item)=>{
                    return(
                        <SplideSlide key={item.id}>
                        <div className='toppicks-map'> 
                        <div className='toppicks-title'>
                            <p>{item.title} </p>
                        </div>
                        
                        <img className='toppicks-img' src={item.img}/> 
                        </div>
                        </SplideSlide>
                    )
                })
            }
            </Splide>
        </div>
    </div>
  )
}

export default TopPicks
