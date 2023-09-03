import { getCountry } from "../services/citiesQueries";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

import Accordion from 'react-bootstrap/Accordion';


import axios from "axios";


import { useDispatch, useSelector } from 'react-redux';
import itinerariesActions from '../../Redux/actions/itineraries.js';
import citiesActions from "../../Redux/actions/cities";


import CityDescription from "../../Components/CityDescription/CityDescription";
import Itinerary from "../../Components/Itinerary/Itinerary";


export  const DetailsCities= () => {
  //const [city, setCity] = useState({});
  //const { id } = useParams();

  //useEffect(() => {
    //getCountry(id).then((res) => {
   //   console.log("fetched details:", res);
     // if(res){setCity(res);}
  //    else{ console.log("city not found")}

//    })
  //   .catch((err) => console.log(err)); 
  let { id } = useParams();

 

  const itinerariesInStore = useSelector(store => store.itinerariesReducer.itineraries)
  const cityInStore = useSelector(store => store.citiesReducer.cities)
  console.log(cityInStore);
  
 
  console.log(itinerariesInStore.itineraries);
  
  const dispatch = useDispatch()
  const citydispatch = useDispatch()
  
  useEffect(() => {
    
        
    axios("http://localhost:3000/api/city/" + id)
    .then((response) => {
      
      citydispatch(citiesActions.get_city(response.data.city))
    })
    .catch((error) => {
      console.log(error);
    });

    dispatch(itinerariesActions.get_itineraries(id))
    return ()=> (itinerariesActions.reset_itineraries())
    
  }, []);
  





 
return (
    <>
 
 <div className="flex justify-center items-center flex-col mx-10">
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img src={cityInStore.photo} alt={cityInStore.name} />
        </figure>
        <div className="card-body w-[60%] self-center">
          <h2 className="card-title text-4xl">{cityInStore.name}</h2>
          <p>{cityInStore.description}</p>
          <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
            <Anchor to="/cities">Go back to Cities</Anchor>
          </div>
        </div>
      </div>
      <div className="w-full m-5 p-5">
        {cityInStore.itineraries?.map((itinerary, i) => (
          <Itinerary itinerary={itinerary} key={i} />
        ))}
      </div>
    </div>

 
    
      <div>
        <h2 className="text-black text-2xl text-center">
          
        </h2>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Under Construction...</Accordion.Header>
        <Accordion.Body>
     
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
      </div>

    
    </>
  );


}

 export default DetailsCities;

