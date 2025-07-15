import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "./config";
import star from './img/sta (1).png'; 
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";


function RestaurantMenu() {
  const [resInfo, setResInfo] = useState({});
  const [resMenu, setResMenu] = useState({});

  const { id } = useParams();
  
  const [resIdChange, setResIdChange]= useState(0);

  const dispatch= useDispatch();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  useEffect(()=>{

    return ()=>{
      setResIdChange(id);
    }
  },[])

   const handleResChange=()=>{
  if(resIdChange!=id){
      dispatch(clearCart())
      console.log("resIdChange")
      
      console.log(resIdChange==id)
      
      console.log(id)
      console.log("chngesdoe")
  }
  setResIdChange(id);
    }

  async function getRestaurantMenu() {
    const fetchRes = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=${id}`
    );
    const resJson = await fetchRes.json();
    setResInfo(
      resJson.data?.cards[2]?.card?.card?.info || {}
    );
    setResMenu(
      resJson.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards || {}
    );
  }

  const handleAddCart=(data)=>{
    handleResChange();
    dispatch(addItem(data));
  }

   return ( <div className=" m-36 w-2/4" >
        <div className="flex justify-between min-w-96 max-w-3xl mb-7" >
            <div>
                <h3 className=" font-bold">{resInfo.name}</h3>
                <p>{resInfo.areaName} {resInfo.city}</p>
                </div>
                <div>
                    <p className="flex  font-bold">{resInfo.avgRating} {resInfo.avgRating? <img className="h-4 w-4 rounded-full m-1" src={star} />: ''}</p>
                    <p>{resInfo.costForTwoMessage}</p>
                </div>
        </div>
      <div className="flex-col ">
        {Object.keys(resMenu).length > 0 ? (
          Object.values(resMenu).map((res) => (
            <div className="flex justify-between m-5 max-w-6xl p-10 border-b font-semibold" key={res?.card?.info?.id}>
                <div>
              <h4>{res?.card?.info?.name}</h4>
              <p>{res?.card?.info?.price ? `₹${Math.floor(res?.card?.info?.price / 100)}` : "₹199.1"}</p>

              <p className=" max-w-lg text-gray-400 font-normal">{res?.card?.info?.description}</p></div>
              {res?.card?.info?.imageId ?(<div className=" relative"><img className=" h-24 w-32 object-cover rounded-xl"
                src={`${CDN_URL}${res?.card?.info?.imageId}`}
                alt="menu-img"
              /><button className=" absolute top-20 left-5 bg-white px-7 py-1 border-2 rounded-sm text-green-500 text-sm font-semibold hover:shadow-lg" onClick={()=>handleAddCart(res?.card?.info) }>ADD</button></div>):(<button className=" h-8 bg-white px-7 py-1 border-2 rounded-sm text-green-500 text-sm font-semibold hover:shadow-lg" onClick={()=> handleAddCart(res?.card?.info)}>ADD</button>)}
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

export default RestaurantMenu;
