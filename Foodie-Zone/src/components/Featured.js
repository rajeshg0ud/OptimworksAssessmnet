import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import '../index.css'; 

const Featured = () => {
    const [currentIndex, setCurrentInder]=useState(0);
    const prevSlider=()=>{
        const isFirstSlide= currentIndex===0;
        const newIndex= isFirstSlide? sliders.length-1 : currentIndex-1;
        setCurrentInder(newIndex);
    }

    const nextSlider=()=>{
        const lastSlide= currentIndex===sliders.length-1;
        const newIndex= lastSlide? 0 : currentIndex+1;
        setCurrentInder(newIndex);
    }
    const moveToNextSlide=(slideNext)=>{
        setCurrentInder(slideNext);
    }
    const sliders= [
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          
                
    ]

  return (
    <div className='slider-container'>
        <img className='img' src={`${sliders[currentIndex].url}` }/>
        <div >
            <BsChevronCompactLeft className='Chevron-left' onClick={()=>prevSlider(currentIndex)}/>
            <BsChevronCompactRight className='Chevron-right' onClick={()=>nextSlider(currentIndex)}/>
        </div>
        <div className='slider-dots'>
        {sliders.map((sliderItem, sliderIndex) => (
          <div key={sliderIndex} onClick={() => moveToNextSlide(sliderIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured