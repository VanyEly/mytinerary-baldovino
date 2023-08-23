import React, { useEffect, useState, useRef } from 'react';
//import '../Cities/cities.css';

import { getAllCountry } from '../services/citiesQueries';
import CityCard from '../components/CityCard';

const Cities = () => {
const [country, setCountry] = useState([]);
const [allCountry, setAllCountry] = useState([]);
const input = useRef(null);

useEffect(() => {
  getAllCountry()
   .then(data=>{
    setCountry(data.cities);
    setAllCountry(data);
   })
   .catch((err) => console.log(err));

  },[]);
console.log(country);
const handleSubmit = (e) => {
  e.preventDefault();
  if (input.current.value){
    const queryParams = "?name=" + input.current.value;
    getAllCountry(queryParams)
    .then((respuesta) => setCountry(respuesta))
    .catch((err)=> console.log(err));
  }else {
    setCountry(allCountry);
  }
};
  
return (
  <section className="container d-flex flex-wrap gap-5 justify-content-center align-item-center justify-content-md-between">
    <form className="d-flex gap-5 col-10" onSubmit={handleSubmit}>
      <input type="text" ref={input} />
      <button className="btn btn-secondary">🔍</button>
    </form>
      <h2 className="text-center w-100 text-primary">Cities</h2>
    
        {country.map((cities)=> <CityCard key={cities._id} ciudad={cities} />)}

  </section>
  );
};

export default Cities;














//import Hero from "../components/Hero"
//import SearchCity from "../components/SearchCity"
//export default function Cities() {
//    return (
//
  //      <main>
    //        <Hero 
      //          title="Cities" 
   //             text="Collection of the most beautiful places and experience" 
     //           styleTitle="text-white"
       //         styleText="text-gray-400"
         //       imgBackground="/assets/images/cities.jpg"
           //     height="h-1/4"
             //   isCenter={true}
    //            childComponent={<SearchCity/>}>
  //          </Hero>
   //         <SearchCity/>
     //   </main>
        
//    )
//}
























//import React from 'react'
//import Layout from '../layout/Layout'
//import MainCities from '../components/MainCities'


//export default function Cities() {
  //return (

    //  <MainCities />
      
      
  //)
//}