import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cargarCityAsync } from "../store/actions.js/Cities";
import Itinerary from "./Itinerary";
import CityDescription from "./CityDescripction";


const DetailsCities = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cityInStore = useSelector((store) => store.citiesReducer.cities[0]);
console.log(cityInStore);
  const itinerariesInStore = useSelector(store => store.itinerariesReducer.itineraries)

  useEffect(() => {
    
    dispatch(cargarCityAsync(id));
  
  }, []);
  return (
    <>
    <div className=" px-4   mx-auto  flex  flex-col justify-end">
      <CityDescription
        key={cityInStore._id}
        cityImage={cityInStore.photo}
        cityName={cityInStore.name}
        CityDesc={cityInStore.description}
      />

      {/* itineraries section */}
      <div className="container mx-auto p-4 mt-5 ">
      
        {itinerariesInStore.length > 0 ? (
          itinerariesInStore.map((itinerary, i) => (
            <Itinerary key={i} itinerary={itinerary} />
          ))
        ) : (
          <h2 className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400 text-center my-5 bg-white rounded-md shadow-lg p-5">
            {" "}
            This city doesn´t have itineraries yet
          </h2>
        )}
      </div>

      {/* back to Cities Button */}
      <div className="mx-auto justify-center">
       
      </div>
    </div>
  </>
  );
};

export default DetailsCities;


