
import { useEffect } from "react";
import CityCard from "./CityCard";

import { useDispatch, useSelector } from "react-redux";
import { addCitiesAsync, add_cities } from "../store/actions.js/Cities";



export default function AllCities() {
  let citiesInStore = useSelector((store) => store.citiesReducer.cities);

  const dispatch = useDispatch();

  useEffect(() => {
  
   dispatch(addCitiesAsync());
   


  }, []);


    

  return (
    <>
         
     
    <div className="w-full flex justify-center  mx-4 ">
      <div className="flex flex-wrap gap-3 m-4">
        {citiesInStore?.map((city, i) => (
          <CityCard key={i} city={city} />
        ))}
      </div>
    </div>
  
    
    </>
  )
  
}
 