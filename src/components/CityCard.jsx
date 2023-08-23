import React from "react";
import { Link as Anchor } from 'react-router-dom'

const CityCard = ({ciudad}) => {
  return (
    <article className="bg-secondary rounded col-3 h-auto">
      <img src={ciudad.photo} className="w-100 h-75" />
      <h2 className="text-center text-white py-3">{ciudad.name}</h2>
      <Anchor className="btn btn-secondary" to={`/city/${ciudad._id}`}>Details </Anchor> 
    </article>
  );
};

export default CityCard;

















//function Card({city, country, image}) {
  //return (
    //<div className="w-40 sm:w-52 lg:w-72 max-h-96 relative rounded-md overflow-hidden">
      //  <a href="#" className="">
        //    <img src={`${image}`} alt="image" className="object-cover w-full h-full"/>
          //  <div className="absolute bottom-0 z-40 w-full [&>p]:text-center [&>p]:font-normal text-white bg-black bg-opacity-60 py-2">
            //    <p className="text-2xl lg:text-3xl">{city}</p>
              //  <p className="">{country}</p>
//            </div>
  //      </a>
 //   </div>
 // )
//}

//export default Card

















//import { useState, useEffect } from "react";

//import axios from "axios";
//import { getAllCities } from "../services/citiesQueries";

//const Cities = ( ) => {
  //const [cities, setCities] = useState([]);

  //useEffect(() => {
  //getAllCities()
    //.then((data) =>  setCities(data))
 //   .catch((err) => console.log(err));
 // },[]);

 // return(
   // <section className="container d-flex flex-wrap gap-5 justify-content-center justify-content-md-between">
     // <h2 className="text-center w-100 text-primary">${country[0].name}</h2>
      //{cities.map((city) => (
        //<CityCard key={city.id} ciudad={city}/>
     // )
     // )}
   //   </section>
  //);
//};

//export default Cities;