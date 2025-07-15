import { useEffect, useState } from "react";
import { CDN_URL, restaurantsList} from "..//config";
import Shimmer from "../shimmerUI";
import { Link } from "react-router-dom";
import star from '../img/sta (1).png'; 
import Footer from './footer';  
import { useSelector } from "react-redux";
import PopularCusine from "./popularCusine"; 

function Body(){

    const [allRestaurantsLists, setallRestaurantLists]= useState(restaurantsList); 
    const [filterRestaurant, setFilterRestaurant]=useState(restaurantsList);

    const searchInput= useSelector(store=> store.search.searchInput); 
    
  async function getCards(){
    const data= await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=17.416889&lng=78.43867');
    
    const json= await data.json();
  
    console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setallRestaurantLists(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(()=>{
    getCards();
  },[]);

  useEffect(()=>{
    const filteredRestaurants= filterRestaurant.filter((restaurant)=>{
    
        const r=restaurant.info.name.toLowerCase();
        const i=searchInput[0].toLowerCase();
    
        return r.includes(i);
    })
    setallRestaurantLists(filteredRestaurants);
    
    console.log(searchInput)
    }, [searchInput])

 /** useEffect(()=>{
    const filtered= filterRestaurant.filter((restaurant)=>{
      const r= restaurant.info.name.toLowerCase();
      const i= inputFromSearch.toLowerCase();

      return r.includes(i);
    }) 
    setallRestaurantLists(filtered);

  },[inputFromSearch]) */

      
      console.log("console from body ");

      if(!allRestaurantsLists) return <Shimmer />;


    const RestaurantCards=({ name,cloudinaryImageId, avgRating, sla, cuisines, areaName})=>{

        const cuisinees= cuisines.slice(0,2);

        return ( 
            <div className="h-65 w-64 m-6 pr-3 transition-transform duration-300 ease-in-out hover:transform hover:scale-95 cursor-pointer" >
                 <img className=" h-44 w-full object-cover rounded-xl" src={ CDN_URL + cloudinaryImageId }/>
                <p className='font-bold' >{name} </p>  
                <div className="flex justify-between font-bold">
                  <span className="flex" >{avgRating}<img className="h-4 w-4 rounded-full m-1" src={star} /></span>
                  <span >{ sla.slaString} </span>
                </div>
                <p  className="text-gray-800">{cuisinees.map((cuisine, index) => (
                <span key={index}>
                      {cuisine}{index < cuisinees.length-1 && ', '} 
                      </span> ))}
                </p>
                <p   className="text-gray-800">{areaName}</p>
                </div>
        );
    }

    return (
        <>
        <PopularCusine/>
        <div className="mx-auto max-w-screen-xl">
        <h1 className="ml-7 mt-4 font-bold text-2xl">Top restaurants </h1>

        <div className="flex flex-wrap mt-6 ml-0 justify-center ">
            {allRestaurantsLists.map((restaurant)=>{
                return(
                    <div key={restaurant.info.id}>
                      <Link  to={`/restaurant/${restaurant.info.id}`} >
                         <RestaurantCards {...restaurant.info} />
                      </Link>
                    </div>
                )
            })}
        </div></div>
        <Footer/></>
    )
}

export default Body;