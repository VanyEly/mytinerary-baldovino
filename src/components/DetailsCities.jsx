import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { getCountry } from "../services/citiesQueries.js";
import { useDispatch, useSelector } from "react-redux";
import Itinerary from "./Itinerary.jsx";
import { add_city } from "../store/actions.js/Cities";

export  const DetailsCities= () => {
 
  let cityInStore = useSelector((store) => store.citiesReducer.city);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getCountry(id)
      .then((data) => dispatch(add_city(data)))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="flex justify-center items-center flex-col mx-10">
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img src={cityInStore.photo} alt={cityInStore.name} />
        </figure>
        <div className="card-body w-[60%] self-center">
          <h2 className="card-title text-4xl">{cityInStore.name}</h2>
          <p>{cityInStore.description}</p>
          <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
         
          </div>
        </div>
      </div>
      <div className="w-full m-5 p-5">
        {cityInStore.itineraries?.map((itinerary, i) => (
          <Itinerary itinerary={itinerary} key={i} />
        ))}
      </div>
    </div>
  );

}



