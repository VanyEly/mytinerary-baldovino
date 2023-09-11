import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addCitiesFilter, add_cities } from '../store/actions.js/Cities';
import CityCard from './CityCard';
import { getCountry } from '../services/citiesQueries';
import { useParams } from 'react-router-dom';


  const CompCities = () => {
  
 let input = useRef()
 const cities = useSelector((store) => store.citiesReducer.citiesFilter)
console.log(cities);

  const dispatch =useDispatch()


const filterCity = () => {
   
dispatch(addCitiesFilter(cities, input.current.value));

      }
  


  
    return (

    <>
      <div className="flex justify-center gap-3 h-10 m-10 ">
      <input
        type="text"
        placeholder="Search"
        className="border-2 p-2 border-gray-500 rounded-md focus:border-blue-400 w-1/4 focus:ring-blue-400"
        ref={input}
      />
      <div className="self-center">
        <button className="btn" onClick={filterCity}>🔍</button>
      </div>
    </div>


       {/* <div>
         <input ref={input} type="text" placeholder='search' className='form-control' />
          <button onClick={()=>filterCity()} className="btn btn-secondary"></button>
        </div> */}
       
        {/* <div className="w-full flex justify-center mx-4">
      <div className="flex flex-wrap gap-3">
        {cities?.map((city, index) => (
          <CityCard key={index} city={city} />
        ))}
      </div>
    </div> */}
    
</>
   );
  };
  



  export default CompCities;



