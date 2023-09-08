import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addCitiesFilter, add_cities } from '../store/actions.js/Cities';


  const CompCities = () => {
  
 let input = useRef()
 const cities = useSelector(store => store.citiesReducer.citiesFilter)
console.log(cities);

  const dispatch =useDispatch()


const filterCity = () => {
   
dispatch(addCitiesFilter(input.current.value))

      }
  
   


  
    return (

    
       <div>
         <input ref={input} type="text" placeholder='search' className='form-control' />
          <button onClick={()=>filterCity()} className="btn btn-secondary">🔍</button>
        </div>
      

   );
  };
  



  export default CompCities;



