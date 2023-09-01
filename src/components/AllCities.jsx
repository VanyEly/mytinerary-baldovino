import React from "react";
import { useEffect } from "react";
import CityCard from "./CityCard";
import {  getAllCountry } from "../services/citiesQueries";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../store/actions.js/Cities";


export default function AllCities() {
  let citiesInStore = useSelector((store) => store.citiesReducer.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCountry()
      .then((data) => { 
        console.log("entro en el then");
        dispatch(citiesActions.add_cities(data));
      }) 
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-3 m-4">
        {citiesInStore?.map((city, i) => (
          <CityCard key={i} city={city} />
        ))}
      </div>
    </div>
  );
}