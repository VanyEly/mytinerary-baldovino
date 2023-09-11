import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Itinerary from "./Itinerary";
import CityDescription from "./CityDescripction";

import { getCountry } from "../services/citiesQueries";
import { addCitiesAsync, add_city, cargarCityAsync } from "../store/actions.js/Cities";
import itinerariesActions from "../store/actions.js/itineraries";


const DetailsCities = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 //const itinerarydispatch = useDispatch()

  const cityInStore = useSelector((store) => store.citiesReducer.cities[0]);
console.log(cityInStore);

  useEffect(() => {
    getCountry(id)
      .then((data) => dispatch(addCitiesAsync(data)))
      .catch((err) => console.log(err));

      return () => {
        dispatch(itinerariesActions.reset_itineraries());
      };

  }, []);
  return (
    <>
    <div className=" px-4   mx-auto  d-flex  flex-col justify-center">
      <CityDescription
        key={cityInStore._id}
        cityImage={cityInStore.photo}
        cityName={cityInStore.name}
        CityDesc={cityInStore.description}
        
      />

      {/* itineraries section */}
    
   
          <div className="w-full m-5 p-5">
        {cityInStore._itineraries?.map((itinerary, i) => (
          <Itinerary itinerary={itinerary} key={i} />
        ))}
      </div>

      </div>
  
   
  </>
  );
};

export default DetailsCities;


