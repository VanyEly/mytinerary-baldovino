//import React, { useRef } from "react";
import { useEffect } from "react";
import CityCard from "./CityCard";
//import {  getAllCountry } from "../services/citiesQueries";
import { useDispatch, useSelector } from "react-redux";
import { addCitiesAsync, add_cities } from "../store/actions.js/Cities";



export default function AllCities() {
  let citiesInStore = useSelector((store) => store.citiesReducer.cities);

  const dispatch = useDispatch();

  useEffect(() => {
   // getAllCountry().then((data) => { 
 
     //   dispatch(citiesActions.add_cities(data));
     // }) 
     // .catch((err) => console.log(err));
   dispatch(addCitiesAsync());
   
// {citiesInStore?.map((city, i) => (
  //        <CityCard key={i} city={city} />
    //    ))}

  }, []);


    

  return (
    <>
         
     
    <div className="w-full flex justify-center mx-4">
      <div className="flex flex-wrap gap-3">
        {citiesInStore?.map((city, i) => (
          <CityCard key={i} city={city} />
        ))}
      </div>
    </div>
  
    
    </>
  )
  
}
 // return (
   // <div className="flex justify-center">
     // <div className="flex flex-wrap gap-3 m-4">
       
     // </div>
   // </div>
 // );