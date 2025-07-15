import { useEffect, useState } from "react";
import { CDN_URL, carousel } from "../config";



function PopularCusine(){

    const [data, setData]= useState(carousel)

    async function getCusine(){
        const data= await fetch('https://www.swiggy.com/mapi/landing/PRE_SEARCH?lat=17.4875418&lng=78.3953462');
        const jsonData=await data.json();

        setData(jsonData.data.cards[3].card.card.imageGridCards.info);
        console.log(jsonData.data.cards[3].card.card.imageGridCards.info);
    }

    useEffect(()=>{
        getCusine();
    },[])

    return(
        <div className="mt-24 font-bold text-2xl pb-6 border-b-2 mx-auto max-w-screen-xl">
        <h1 className=" ml-7">Popular Cuisines</h1>
        <div className="flex relative overflow-hidden">
          {Object.values(data).map((item) => (
            <img key={item.id} className="w-36 m-5" src={CDN_URL + item.imageId} alt="imageofcusine" />
          ))}
        </div>
      </div>
      

    )
}

export default PopularCusine;